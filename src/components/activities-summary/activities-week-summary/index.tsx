import React from 'react'
import { connect } from 'react-redux'
import StravaDetailedActivity from '../../../models/strava/strava-detailed-activity'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts'
import { StravaActivityType } from '../../../models/strava/strava-activity-type';

interface IProps {
  activities: Array<IChartData>
}
interface IChartData {
  day: string,
  distance: number
}

const days = ["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"]

const compareDates = (date1:Date, date2:Date):number => {
  let d1 = new Date(date1)
  d1.setHours(0, 0, 0, 0)
  let d2 = new Date(date2)
  d2.setHours(0, 0, 0, 0)
  return d1.getTime() - d2.getTime()
}

const filterChartData = (
  activities:Array<StravaDetailedActivity>,
  activityType: StravaActivityType): Array<IChartData> => {
  let chartData:Array<IChartData> = []
  let date = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)
  const weekActivityData:Array<StravaDetailedActivity> =
    activities
    .filter(activity => {
      return activity.type === activityType && compareDates(new Date(activity.start_date_local), date) >= 0

    })

  for (let i = 0; i < 7; i++) {
    let dist = weekActivityData
      .filter(activity => {
        return compareDates(new Date(activity.start_date_local), date) === 0
      })
      .map(activity => activity.distance)
      .reduce((sum, distance) => sum + distance, 0)

    chartData[i] = {
      day: days[date.getDay()],
      distance: dist = Math.round(10 * dist / 1000) / 10
    }
    date.setDate(date.getDate() + 1)
  }
  return chartData
}

const ActivitiesWeekSummary: React.FunctionComponent<IProps> = (props: IProps) => {
  return (
    <div>
      <BarChart
        width={500}
        height={200}
        data={ props.activities }
        margin={{
          top: 5, right: 30, left: 0, bottom: 5,
        }}
      >
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="distance" fill="#8884d8" />
      </BarChart>
      <p className="text-muted">Strava</p>
    </div>

  )
}
const mapStateToProps = (state: any) => {
  return {
    activities: filterChartData(state.activities.activities, state.activitiesSummary.selectedActivity)
  }
}
export default connect(mapStateToProps)(ActivitiesWeekSummary)