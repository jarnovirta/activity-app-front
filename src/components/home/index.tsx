import './index.css'
import React from 'react'
import Profile from './../profile'
import ActivitiesSummary from '../activitiesSummary'
import AddUser from '../add-user/index'
import Login from '../login'

const Home = () => {
  return (
    <div className="content">
      <Login />
      <AddUser />
      <Profile />
      <ActivitiesSummary />
    </div>
  )
}

export default Home