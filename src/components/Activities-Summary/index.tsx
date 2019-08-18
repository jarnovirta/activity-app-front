import './index.css'
import React from 'react'
import { connect } from 'react-redux'
import { Card, ListGroup } from 'react-bootstrap'
import { StravaDetailedActivity } from '../../models/strava/strava-detailed-activity-iots'
import ActivitiesWeekSummary from './Activities-Week-Summary/Activities-Week-Summary'
import ActivityButtons from './Activity-Buttons'

interface IProps {
  activities: Array<StravaDetailedActivity>
}

const ActivitiesSummary: React.FunctionComponent<IProps> = (props: IProps) => {
  return (
    <div>
      <Card>
        <Card.Header>
          Activities Summary
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <ActivityButtons />
          </ListGroup.Item>
          <ListGroup.Item><ActivitiesWeekSummary /></ListGroup.Item>
          <ListGroup.Item>Month summary</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  )
}
const mapStateToProps = (state: any) => {
  return {
    activities: state.activities
  }
}

export default connect(mapStateToProps)(ActivitiesSummary)