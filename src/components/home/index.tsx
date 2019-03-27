import './index.css'
import React from 'react'
import Profile from './../profile'
import ActivitiesSummary from './../activities-summary'

const Home = () => {
  return (
    <div className="content">
      <Profile />
      <ActivitiesSummary />
    </div>
  )
}

export default Home