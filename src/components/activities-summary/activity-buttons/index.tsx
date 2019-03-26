import './index.css'
import React from 'react'
import { connect } from 'react-redux'
import { ButtonGroup, Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import { StravaActivityType } from '../../../models/strava/strava-activity-type'
import { setActivity } from '../../../store/activities-summary/activities-summary-reducer'

interface IProps {
  setActivity: Function,
  selectedActivity: StravaActivityType
}
const ActivityButtons: React.FunctionComponent<IProps> = (props: IProps) => {
  const activityButtonStyle = { color: 'white', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }
  const handleSetActivityClick = (activity:StravaActivityType) => () => {
    props.setActivity(activity)
  }
  return (
    <div>
      <ButtonGroup>
        <Button
          variant="secondary"
          onClick={handleSetActivityClick(StravaActivityType.Ride)}
          active={props.selectedActivity === StravaActivityType.Ride}>
          <FontAwesome className="activityIcon"
            name='bicycle'
            size='2x'
            style={activityButtonStyle}
          />
        </Button>
        <Button
          variant="secondary"
          onClick={handleSetActivityClick(StravaActivityType.Run)}
          active={props.selectedActivity === StravaActivityType.Run}>
          <FontAwesome
            name='running'
            size='2x'
            style={activityButtonStyle}
          />
        </Button>
        <Button variant="secondary"
          onClick={handleSetActivityClick(StravaActivityType.Swim)}
          active={props.selectedActivity === StravaActivityType.Swim}>
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