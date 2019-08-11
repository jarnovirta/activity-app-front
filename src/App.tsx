import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './components/home'
import { initializeActivities } from './store/activities/activities-reducer'
import { setUser } from './store/user/user-reducer'
import { AppState } from './store/store'

class App extends Component<any, any> {

  componentDidMount = async () => {
    // this.props.initializeActivities()
    console.log("URL", `${window.location.href}api/stravaauth/authCode/${this.props.user.id}`)
    const loginDataString = window.localStorage.getItem('FitnessAppUser')
    if (loginDataString !== null) {
      this.props.setUser(JSON.parse(loginDataString))
      console.log("Logged in user", JSON.parse(loginDataString))
      this.props.initializeActivities(JSON.parse(loginDataString).stravaAccessToken)
    }
  }
  getStravaAuthentication = async (event:any) => {
    event.preventDefault() 
    const redirectUrl = `${window.location.href}api/stravaauth/authCode/${this.props.user.id}`
    console.log("Redirect ", redirectUrl)
    const stravaAuthUrl = "http://www.strava.com/oauth/authorize?"
      + "client_id=33120&response_type=code&redirect_uri=" 
      + redirectUrl + "&"
      + "approval_prompt=force&scope=profile:write,activity:write,activity:read_all"
      window.location.href = stravaAuthUrl  
  }
  render() {
    return (
      <div className="container">
        <button onClick={this.getStravaAuthentication}>Authenticate</button>
        <h1>Jarno's Fitness App</h1>
        <Router>
          <Home />
        </Router>
      </div>
    );
  }
}
const mapStateToProps = (state: AppState) => ({
  user: state.user
})
const mapDispatchersToProps = {
  initializeActivities, setUser

}
export default connect(mapStateToProps, mapDispatchersToProps)(App)