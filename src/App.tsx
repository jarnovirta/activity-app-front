import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import ActivitiesSummary from './components/activities-summary'
import { initializeActivities } from './store/activities/activities-reducer'

class App extends Component<any, any> {
  componentDidMount = () => {
    this.props.initializeActivities()
  }
  render() {
    return (
      <div className="container">
        <h1>Jarno's Fitness App</h1>
        <Router>
          <ActivitiesSummary />
        </Router>
      </div>
    );
  }
}

const mapDispatchersToProps = {
  initializeActivities
}
export default connect(null, mapDispatchersToProps)(App)