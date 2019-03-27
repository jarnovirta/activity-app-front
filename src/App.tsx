import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './components/home'
import { initializeActivities } from './store/activities/activities-reducer'
import { setUser } from './store/user/user-reducer'
import userService from './services/user'

class App extends Component<any, any> {
  componentDidMount = async () => {
    this.props.initializeActivities()
    this.props.setUser(await userService.getUser())
  }
  render() {
    return (
      <div className="container">
        <h1>Jarno's Fitness App</h1>
        <Router>
          <Home />
        </Router>
      </div>
    );
  }
}

const mapDispatchersToProps = {
  initializeActivities, setUser

}
export default connect(null, mapDispatchersToProps)(App)