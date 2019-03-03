import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserTest from './components/user-profile/'
import User from './models/User'
import ActivitiesSummary from './components/activities-summary'
import { initializeActivities } from './reducers/activities-reducer'

class App extends Component<any, any> {
  componentDidMount = () => {
    this.props.initializeActivities()
  }
  render() {
    const getUser = (): User => {
      return {
        name: 'Jarno',
        age: 18,
        address: "Pietarinkatu",
        dob: new Date()

      }
    }
    return (
      <div>
          Hello, <UserTest { ...getUser() } />
          <ActivitiesSummary />
      </div>
    );
  }
}

const mapDispatchersToProps = {
  initializeActivities
}
export default connect(null, mapDispatchersToProps)(App)