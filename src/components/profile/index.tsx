import './index.css'
import React from 'react'
import { connect } from 'react-redux'
import { Card, ListGroup, Image } from 'react-bootstrap'
import Moment from 'react-moment'
import { IProps } from './types'
import testImg from './../../profile_img.jpg'
import { StravaDetailedActivity } from '../../models/strava/strava-detailed-activity-iots'

const filterLatestActivity = (activities:Array<StravaDetailedActivity>) => {
  return activities
    .sort((a, b) => new Date(b.start_date_local).getTime()
      - new Date(a.start_date_local).getTime())
    [0]
}

const Profile: React.FunctionComponent<IProps> = (props: IProps) => {
  const LatestActivity = () => {
    if (!props.latestActivity) return (<div></div>)
    return (
      <div>
        Latest activity:<br />
        <b>{ props.latestActivity.type }</b>
        &nbsp;- <Moment format="MMM DD, YYYY">{props.latestActivity.start_date_local}</Moment>
      </div>
    )
  }
  return (
    <div className="profile">
    <div style={{ display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}}>
    <Image src={testImg }
            style={{marginBottom: '-2.5rem', zIndex: 100000, position:'relative', maxWidth:'80px', maxHeight:'80px'}}
            roundedCircle />
    </div>
      <Card>
        <Card.Header>
          <div className="profileBody text-center">
            <h3>{ props.user.username }</h3>
            <p>Activities - { props.activitiesCount }</p>
          </div>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <LatestActivity />
          </ListGroup.Item>
          <ListGroup.Item>
            Your Training Log
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  )
}
const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    activitiesCount: state.activities.activityList.length,
    latestActivity: filterLatestActivity(state.activities.activityList)
  }
}
export default connect(mapStateToProps)(Profile)