import './index.css'
import React from 'react'
import Profile from '../Profile/Profile'
import ActivitiesSummary from '../Activities-Summary'

const Home = () => {
  return (
    <div>
      <Profile />
      <ActivitiesSummary />
    </div>
  )
}

export default Home