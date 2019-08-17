import './App.css'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom'
import Home from './components/home'
import { initializeActivities } from './store/activities/activities-reducer'
import { setUser } from './store/user/user-reducer'
import { AppState } from './store/store'
import Navigation from './components/navigation'
import Login from './components/login'
import Signup from './components/sign-up'
import IUser from './models/User'
import { IActivitiesState } from './store/activities/types';
import RequestAuthorization from './components/request-authorization';
import loginService from './services/login'

interface IProps extends RouteComponentProps<any> {
  setUser: Function,
  activities: IActivitiesState,
  initializeActivities: Function,
  user: IUser
}

const initialize = async (props: IProps) => {
  if (props.user.logInStatus === "NOT_CHECKED") {
    try {
      const response = await loginService.currentUser()
      const user = response.data
      props.setUser(user)
    }
    catch (e) {
      console.error("User not logged in")
      console.log(e)
    }
  }
}
const App: React.SFC<IProps> = (props: IProps) => {
  useEffect(() => {
    initialize(props)
  }, [props])

  return (
    <div className="container">
      <div>
        <Navigation />
        <Switch>
          <Route path="/login" render={() => <Login />} />
          <Route path="/signup" render={() => <Signup />} />
          <Route exact path="/" render={() => <Home />} />
          <Route path="/requestAuthorization" render={() => <RequestAuthorization />} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </div>
    </div>
  )
}
const mapStateToProps = (state: AppState) => ({
  user: state.user,
  activities: state.activities
})
const mapDispatchersToProps = {
  initializeActivities, setUser
}

export default withRouter(connect(mapStateToProps, mapDispatchersToProps)(App))
