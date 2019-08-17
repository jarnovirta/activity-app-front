import React from 'react'
import { AppState } from '../../store/store'
import IUser from '../../models/User'
import { connect } from 'react-redux'

interface IProps {
  user: IUser
}
const RequestAuthorization = (props: IProps) => {
  const getStravaAuthorization = () => async (event: any) => {
    event.preventDefault()
    const redirectUrl = `${window.location.href}api/stravaauth/authCode/${props.user.id}`
    const stravaAuthUrl = "http://www.strava.com/oauth/authorize?"
      + "client_id=33120&response_type=code&redirect_uri="
      + redirectUrl + "&"
      + "approval_prompt=force&scope=profile:write,activity:write,activity:read_all"
    window.location.href = stravaAuthUrl
  }

  return (
    <div>
      <h4>Please authorize access to your Strava data</h4>
      <button onClick={getStravaAuthorization}>Authorize</button>
    </div>
  )
}

const mapStateToProps = (state: AppState) => { 
  return {
    user: state.user
  }  
}
export default connect(mapStateToProps, null)(RequestAuthorization)