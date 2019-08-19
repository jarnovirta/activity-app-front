import React from 'react'
import { AppState } from '../../store/store'
import { connect } from 'react-redux'
import { IRequestAuthorizationProps } from './types'

const RequestAuthorization = (props: IRequestAuthorizationProps) => {
  const getStravaAuthorization = (event: any) => {
    event.preventDefault()
    
    const pathParts: Array<string> = window.location.href.split('/')
    let redirectUrl: string = `${pathParts[0]}//${pathParts[2]}`
    redirectUrl += `/api/stravaauth/authCode/${props.user.id}`
    const stravaAuthUrl = 'http://www.strava.com/oauth/authorize?'
      + 'client_id=33120&response_type=code&redirect_uri='
      + redirectUrl + '&'
      + 'approval_prompt=force&scope=profile:write,activity:write,activity:read_all'
    window.location.href = stravaAuthUrl
  }

  return (
    <div>
      {console.log("USER", props.user)}
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