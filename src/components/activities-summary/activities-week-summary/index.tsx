import React from 'react'
import { connect } from 'react-redux'
import { StravaDetailedActivity } from '../../../models/strava/strava-detailed-activity-iots'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
} from 'recharts'
import { StravaActivityType }  from '../../../models/strava/strava-activity-type'
import compareDates from './../../../util/compare-dates'
import { IChartData, IProps } from './types'

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const startDate = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)

const getChartData = (weekActivityData:Array<StravaDetailedActivity>):Array<IChartData> => {
    const chartDate:Date = new Date(startDate)
    let chartData:Array<IChartData> = []
    for (let i = 0; i < 7; i++) {
      let dist = weekActivityData
        .filter(activity => {
          return compareDates(new Date(activity.start_date_local), chartDate) === 0
        })
        .map(activity => activity.distance)
        .reduce((sum, distance) => sum + distance, 0)
      chartData[i] = {
        day: days[chartDate.getDay()],
        distance: dist = Math.round(10 * dist / 1000) / 10
      }
      chartDate.setDate(chartDate.getDate() + 1)
    }
    return chartData
  }

const filterActivities = (
  activities:Array<StravaDetailedActivity>,
  activityType: StravaActivityType): Array<StravaDetailedActivity> => {
    return activities
      .filter(activity => {
        return activity.type === activityType &&
          compareDates(new Date(activity.start_date_local), startDate) >= 0
      })
}

const ActivitiesWeekSummary: React.FunctionComponent<IProps> = (props: IProps) => {
  return (
    <div>
      <BarChart
        width={500}
        height={150}
        data={ getChartData(props.activities) }
        margin={{
          top: 5, right: 30, left: 0, bottom: 5,
        }}>
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
    activities: filterActivities(
      state.activities,
      state.activitiesSummary.selectedActivity)
  }
}
export default connect(mapStateToProps)(ActivitiesWeekSummary)