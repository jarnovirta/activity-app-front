import './App.css'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/home'
import { initializeActivities } from './store/activities/activities-reducer'
import { setUser } from './store/user/user-reducer'
import { AppState } from './store/store'
import Navigation from './components/navigation'
import Login from './components/login'
import Signup from './components/sign-up'
import IUser from './models/User'
import { IActivitiesState } from './store/activities/types';

interface IProps {
  setUser: Function,
  activities: IActivitiesState,
  initializeActivities: Function,
  user: IUser
}
const getLoggedInUser = async (props: IProps) => {
  const loginDataString = window.localStorage.getItem('FitnessAppUser')
  if (loginDataString) await props.setUser(JSON.parse(loginDataString))  
}
const initializeState = async (props: IProps) => {
  if (!props.user.username) getLoggedInUser(props)
  if (!props.activities.initialized && props.user.username) {    
    props.initializeActivities(props.user.stravaToken)
  }
}
const App = (props: IProps) => {
  useEffect(() => {
    initializeState(props)
  }, [props])

  const getStravaAuthentication = () => async (event: any) => {
    event.preventDefault()
    const redirectUrl = `${window.location.href}api/stravaauth/authCode/${props.user.id}`
    const stravaAuthUrl = "http://www.strava.com/oauth/authorize?"
      + "client_id=33120&response_type=code&redirect_uri="
      + redirectUrl + "&"
      + "approval_prompt=force&scope=profile:write,activity:write,activity:read_all"
    window.location.href = stravaAuthUrl
  }
  return (
    <div className="container">
      <Router>
        <div>
          <Navigation />          
            <Route path="/login" render={() => <Login />} />
            <Route path="/signup" render={() => <Signup />} />
            <Route exact path="/" render={() => <Home />} />          
        </div>
      </Router>
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
export default connect(mapStateToProps, mapDispatchersToProps)(App)