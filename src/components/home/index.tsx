import './index.css'
import React from 'react'
import Profile from './../profile'
import ActivitiesSummary from '../activitiesSummary'

const Home = () => {
  return (
    <div>
      <Profile />
      <ActivitiesSummary />
    </div>
  )
}

export default Home