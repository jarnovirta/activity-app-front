import React from 'react'
import { connect } from 'react-redux'
import StravaDetailedActivity from '../../../models/strava/StravaDetailedActivity'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts'

interface IProps {
  activities: Array<StravaDetailedActivity>
}
const ActivitiesWeekSummary: React.FunctionComponent<IProps> = (props: IProps) => {
  const formatDistance = (activity:StravaDetailedActivity): number => {
    return Math.round(10 * activity.distance / 1000) / 10
  }
  const getDay = (activity:StravaDetailedActivity): string => {
    const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
    return days[new Date(activity.start_date_local).getDay()]
  }
  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={ props.activities }
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <XAxis dataKey={getDay} />
        <YAxis />
        <Tooltip />
        <Bar dataKey={formatDistance} fill="#8884d8" />
      </BarChart>
      <p className="text-muted">Strava</p>
    </div>
  )
}
const mapStateToProps = (state: any) => {
  return {
    activities: state.activities
  }
}
export default connect(mapStateToProps)(ActivitiesWeekSummary)