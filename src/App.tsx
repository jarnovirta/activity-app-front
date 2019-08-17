import './App.css'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter, RouteComponentProps, Redirect } from 'react-router-dom'
import Home from './components/home'
import { initializeActivities } from './store/activities/activities-reducer'
import { setUser, loginFailed } from './store/user/user-reducer'
import { AppState } from './store/store'
import Navigation from './components/navigation'
import Login from './components/login'
import Signup from './components/sign-up'
import IUser from './models/User'
import { IActivitiesState } from './store/activities/types';
import RequestAuthorization from './components/request-authorization';
import loginService from './services/login'
import Welcome from './components/welcome';
import activitiesService from './services/activities'
import { LoginStatus } from './models/LoginStatus';

interface IProps extends RouteComponentProps<any> {
  setUser: Function,
  loginFailed: Function,
  activities: IActivitiesState,
  initializeActivities: Function,
  user: IUser
}

const initialize = async (props: IProps) => {
  if (props.user.loginStatus === "NOT_CHECKED") {
    try {
      const response = await loginService.currentUser()
      const user = response.data
      props.setUser(user)
    }
    catch (e) {
      if (e.response && e.response.status === 401) {
        console.log("Login failed")
        props.loginFailed()
      }
      else console.log(e)
    }    
  }
  if (props.user.loginStatus === "LOGGED_IN" && !props.activities.initialized) {
    if (props.user.stravaToken && props.user.stravaToken.accessToken) {        
      activitiesService.setInterceptor(props.user)
      props.initializeActivities()
    }
  }
}
const enforceRoutes = (props: IProps) => {
  const userLoginStatus: LoginStatus = props.user.loginStatus as LoginStatus
  const isLoginPending = userLoginStatus === "NOT_CHECKED"
  const isLoggedIn = isLoginPending || userLoginStatus === "LOGGED_IN"
  const isNotAuthorizedToStrava = isLoggedIn && props.user.stravaToken && !props.user.stravaToken.accessToken
  const path = props.history.location.pathname
  const notLoggedInPaths:Array<string> = ['/','/login', '/signup', '/requestAuthorization']
  
  if (isLoggedIn && isNotAuthorizedToStrava && path !== '/requestAuthorization') props.history.push('/requestAuthorization')
  else if (isLoggedIn && notLoggedInPaths.includes(path)) props.history.push('/home')
  else if (!isLoggedIn && !(notLoggedInPaths.includes(path))) props.history.push('/login')
  
}
const App: React.SFC<IProps> = (props: IProps) => {
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
        {/*USER NOT LOGGED IN */}
        
        <Route exact path='/' component={Welcome} />
        <Route path='/home' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/requestAuthorization' component={RequestAuthorization} />
      </div>
    )
  }

  return (
    <div className="container">
      <Navigation />
      { props.user.loginStatus === "NOT_CHECKED" ? LoginPendingView() : LoginCheckedView() }
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
