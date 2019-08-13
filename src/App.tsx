import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/home'
import { initializeActivities } from './store/activities/activities-reducer'
import { setUser } from './store/user/user-reducer'
import { Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { AppState } from './store/store'
import Login from './components/login'
import Signup from './components/sign-up'

class App extends Component<any, any> {
  componentDidMount = async () => {
    // this.props.initializeActivities()
    
    const loginDataString = window.localStorage.getItem('FitnessAppUser')
    if (loginDataString !== null) {
      this.props.setUser(JSON.parse(loginDataString))
      this.props.initializeActivities(JSON.parse(loginDataString).stravaAccessToken)
    }
    
  }
  getStravaAuthentication = async (event: any) => {
    event.preventDefault()
    const redirectUrl = `${window.location.href}api/stravaauth/authCode/${this.props.user.id}`
    const stravaAuthUrl = "http://www.strava.com/oauth/authorize?"
      + "client_id=33120&response_type=code&redirect_uri="
      + redirectUrl + "&"
      + "approval_prompt=force&scope=profile:write,activity:write,activity:read_all"
    window.location.href = stravaAuthUrl
  }

  render() {
    const Menu = () => (
      <div>
        <Nav variant="pills">
          <LinkContainer exact to="/">
            <Nav.Link eventKey="/">Home</Nav.Link>
          </LinkContainer>
         {/* <LinkContainer to="/login">
            <Nav.Link eventKey="/login">Login</Nav.Link>
          </LinkContainer>  */}
        </Nav>
      </div>
    )
    const loggedIn = !this.props.user ? false : this.props.user.username != ''
    const showWhenLoggedIn = { display: loggedIn ? '' : 'none' }
    const showWhenNotLoggedIn = { display: loggedIn ? 'none' : '' }
    
    return (      
      <div className="container">
        <Router>
          <div>
            <div style={showWhenNotLoggedIn}>              
              <Login />
            </div>
            <div style={showWhenLoggedIn}>
              <Menu />
              <Route exact path="/" render={() => <Home />} />
              <Route path="/login" render={() => <Login />} />
              <Route path="/signup" render={() => <Signup />} />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}
const mapStateToProps = (state: AppState) => ({
  user: state.user
})
const mapDispatchersToProps = {
  initializeActivities, setUser

}
export default connect(mapStateToProps, mapDispatchersToProps)(App)