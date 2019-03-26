import './index.css'
import React from 'react'
import { connect } from 'react-redux'
import { Card, ListGroup, ButtonGroup, Button } from 'react-bootstrap'
import StravaDetailedActivity from '../../models/strava/strava-detailed-activity'
import ActivitiesWeekSummary from './activities-week-summary'
import FontAwesome from 'react-fontawesome'
import { initializeActivities } from './../../reducers/activities-reducer'

interface IProps {
  activities: Array<StravaDetailedActivity>
  initialize: Function

}
const ActivitiesSummary: React.FunctionComponent<IProps> = (props: IProps) => {
  const clickTest = (activity:string) => () => {
    props.initialize()
  }
  return (

    <div>
      <Card>
        <Card.Header>
          Activities Summary
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
          <ButtonGroup>
            <Button variant="secondary" onClick={clickTest('cycle')}>
              <FontAwesome
                name='bicycle'
                size='2x'
                style={{ color: 'white', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
            </Button>
            <Button variant="secondary" onClick={clickTest('run')}>
              <FontAwesome
                name='running'
                size='2x'
                style={{ color: 'white', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
            </Button>
            <Button variant="secondary" onClick={clickTest('swim')}>
              <FontAwesome
                name='swimmer'
                size='2x'
                style={{ color: 'white', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
            </Button>
          </ButtonGroup>
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
const mapDispatchersToProps = {
  initialize: initializeActivities
}
export default connect(mapStateToProps, mapDispatchersToProps)(ActivitiesSummary)