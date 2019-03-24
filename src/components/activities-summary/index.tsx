import React from 'react'
import { connect } from 'react-redux'
import { Card, ListGroup } from 'react-bootstrap'
import StravaDetailedActivity from '../../models/strava/StravaDetailedActivity'
import ActivitiesWeekSummary from './activities-week-summary'

interface IProps {
  activities: Array<StravaDetailedActivity>
}
const ActivitiesSummary: React.FunctionComponent<IProps> = (props: IProps) => {
  return (
    <div>
      <Card>
        <Card.Header>Activities Summary</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item><ActivitiesWeekSummary /></ListGroup.Item>
          <ListGroup.Item>Month summary</ListGroup.Item>
          <ListGroup.Item>Year summary</ListGroup.Item>
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