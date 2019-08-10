import './index.css'
import React from 'react'
import Profile from './../profile'
import ActivitiesSummary from '../activitiesSummary'
import AddUser from '../addUser/index'

const Home = () => {
  return (
    <div className="content">
      <AddUser />
      <Profile />
      <ActivitiesSummary />
    </div>
  )
}

export default Home