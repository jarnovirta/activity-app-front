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
      console.log("Checking user login")
      const response = await loginService.currentUser()
      const user = response.data
      console.log("setting user", user)
      props.setUser(user)
      
      if (user.stravaToken && user.stravaToken.accessToken) {        
        activitiesService.setUpdateUserState(props.setUser)
      }
    }
    catch (e) {
      if (e.response && e.response.status === 401) {
        console.log("Login failed")
        props.loginFailed()
      }
      else console.log(e)
    }
    console.log("Initializing")
    props.initializeActivities()
    props.initializeActivities()
    props.initializeActivities()
  }
}

const App: React.SFC<IProps> = (props: IProps) => {
  useEffect(() => {
    initialize(props)
  }, [props])

  const userLoginStatus: LoginStatus = props.user.loginStatus as LoginStatus
  const ControlledRoute = ({ component, isAccessible, redirectTo, ...rest }: any) => {
    const routeComponent = (props: any) => (
      isAccessible
        ? React.createElement(component, props)
        : <Redirect to={{ pathname: redirectTo }} />
    )
    return <Route {...rest} render={routeComponent} />
  }

  const isLoginPending = userLoginStatus === "NOT_CHECKED"
  const isLoggedIn = userLoginStatus === "LOGGED_IN"
  const isNotLoggedIn = userLoginStatus === "NOT_LOGGED_IN"
  const isNotAuthorizedToStrava = isLoggedIn && props.user.stravaToken && !props.user.stravaToken.accessToken

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
        <ControlledRoute exact path='/' redirectTo="/home"
          isAccessible={isNotLoggedIn}
          component={Welcome}
        />
        <ControlledRoute path='/login' redirectTo="/home"
          isAccessible={isNotLoggedIn}
          component={Login}
        />
        <ControlledRoute path='/signup' redirectTo="/home"
          isAccessible={isNotLoggedIn}
          component={Signup}
        />

        {/* USER LOGGED IN BUT NO AUTHORIZATION TO STRAVA  */}
        <ControlledRoute path='/requestAuthorization' redirectTo="/home"
          isAccessible={isNotAuthorizedToStrava}
          component={RequestAuthorization}
        />

        {/* USER LOGGED IN  */}
        <ControlledRoute path='/home' redirectTo="/login"
          isAccessible={isLoggedIn}
          component={Home}
        />
      </div>
    )
  }

  return (
    <div className="container">
      <Navigation />
      { isLoginPending ? LoginPendingView() : LoginCheckedView() }
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
