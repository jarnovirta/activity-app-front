import './App.css'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import Home from '../Home/Home'
import { initializeActivities } from '../../store/activities/thunks'
import { setUser, loginFailed } from '../../store/user/thunks'
import { AppState } from '../../store/store'
import Navigation from '../Navigation/Navigation'
import Login from '../Login/Login'
import Signup from '../Sign-Up/Sign-Up'
import { TLoginStatus } from '../../common-types/user'
import RequestAuthorization from '../Request-Authorization/Request-Authorization'
import loginService from '../../services/login'
import Welcome from '../Welcome/Welcome'
import activitiesService from '../../services/activities'
import { IAppProps } from './types'

const initialize = async (props: IAppProps) => {
  if (props.user.loginStatus === 'NOT_CHECKED') {
    try {
      const user = await loginService.currentUser()
      props.setUser(user)
    }
    catch (e) {
      if (e.response && e.response.status === 401) {
        console.log('Login failed')
        props.loginFailed()
      }
      else console.log(e)
    }    
  }
  if (props.user.loginStatus === 'LOGGED_IN' && !props.activities.initialized) {
    if (props.user.stravaToken && props.user.stravaToken.accessToken) {        
      activitiesService.setInterceptor(props.user)
      props.initializeActivities()
    }
  }
}
const enforceRoutes = (props: IAppProps) => {
  const userLoginStatus: TLoginStatus = props.user.loginStatus as TLoginStatus
  const isLoginPending = userLoginStatus === 'NOT_CHECKED'
  const isLoggedIn = isLoginPending || userLoginStatus === 'LOGGED_IN'
  const isNotAuthorizedToStrava = isLoggedIn && props.user.stravaToken && !props.user.stravaToken.accessToken
  const path = props.history.location.pathname
  const notLoggedInPaths:Array<string> = ['/','/login', '/signup', '/requestAuthorization']
  
  if (isLoggedIn && isNotAuthorizedToStrava && path !== '/requestAuthorization') props.history.push('/requestAuthorization')
  else if (isLoggedIn && notLoggedInPaths.includes(path)) props.history.push('/home')
  else if (!isLoggedIn && !(notLoggedInPaths.includes(path))) props.history.push('/login')
  
}
const App: React.SFC<IAppProps> = (props: IAppProps) => {
  useEffect(() => {
    initialize(props)
    enforceRoutes(props)
  }, [props])

  const LoginPendingView = () => {
    return (
      <div>
        <h1>SPINNER...</h1>
      </div>
    )
  }

  const LoginCheckedView = () => {
    return (
      <div>
        <Route exact path='/' component={Welcome} />
        <Route path='/home' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/requestAuthorization' component={RequestAuthorization} />
      </div>
    )
  }

  return (
    <div className='container'>
      <Navigation />
      { props.user.loginStatus === 'NOT_CHECKED' ? LoginPendingView() : LoginCheckedView() }
    </div>
  )
}
const mapStateToProps = (state: AppState) => ({
  user: state.user,
  activities: state.activities
})
const mapDispatchersToProps = {
  initializeActivities, setUser, loginFailed
}

export default withRouter(connect(mapStateToProps, mapDispatchersToProps)(App))
