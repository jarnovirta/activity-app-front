import './index.css'
import React from 'react'
import { connect } from 'react-redux'
import { ButtonGroup, Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import { StravaActivityTypes } from '../../../common-types/strava-api/data/strava-activity-type'
import { setActivity } from '../../../store/activities-summary/thunks'
import { IActivityButtonsProps } from './types'

const ActivityButtons: React.FunctionComponent<IActivityButtonsProps> = (props: IActivityButtonsProps) => {
  const activityButtonStyle = { color: 'white', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }
  const handleSetActivityClick = (activity:StravaActivityTypes) => () => {
    props.setActivity(activity)
  }
  return (
    <div>
      <ButtonGroup>
        <Button
          variant='secondary'
          onClick={handleSetActivityClick(StravaActivityTypes.Ride)}
          active={props.selectedActivity === StravaActivityTypes.Ride}>
          <FontAwesome className='activityIcon'
            name='bicycle'
            size='2x'
            style={activityButtonStyle}
          />
        </Button>
        <Button
          variant='secondary'
          onClick={handleSetActivityClick(StravaActivityTypes.Run)}
          active={props.selectedActivity === StravaActivityTypes.Run}>
          <FontAwesome
            name='running'
            size='2x'
            style={activityButtonStyle}
          />
        </Button>
        <Button variant='secondary'
          onClick={handleSetActivityClick(StravaActivityTypes.Swim)}
          active={props.selectedActivity === StravaActivityTypes.Swim}>
          <FontAwesome
            name='swimmer'
            size='2x'
            style={activityButtonStyle}
          />
        </Button>
      </ButtonGroup>
    </div>
  )
}
const mapStateToProps = (state: any) => {
  return {
    selectedActivity: state.activitiesSummary.selectedActivity
  }
}
const mapDispatchersToProps = {
  setActivity
}
export default connect(mapStateToProps, mapDispatchersToProps)(ActivityButtons)