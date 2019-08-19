import React from 'react'
import { connect } from 'react-redux'
import IStravaActivityDetail from '../../../common-types/strava-api/data/strava-activity-detail'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
} from 'recharts'
import { StravaActivityTypes }  from '../../../common-types/strava-api/data/strava-activity-type'
import daysBetweenDates from '../../../util/dateUtils'
import { IChartData, IWeekSummaryProps } from './types'

const days: Array<string> = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const startDate: Date = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)

const getChartData = (weekActivityData:Array<IStravaActivityDetail>): Array<IChartData> => {
    const chartDate: Date = new Date(startDate)
    let chartData: Array<IChartData> = []
    for (let i = 0; i < 7; i++) {
      let dist: number = weekActivityData
        .filter(activity => {
          return daysBetweenDates(new Date(activity.start_date_local), chartDate) === 0
        })
        .map(activity => activity.distance)
        .reduce((sum: number, distance: number) => sum + distance, 0)
      chartData[i] = {
        day: days[chartDate.getDay()],
        distance: dist = Math.round(10 * dist / 1000) / 10
      }
      chartDate.setDate(chartDate.getDate() + 1)
    }
    return chartData
  }

const filterActivities = (
  activities:Array<IStravaActivityDetail>,
  activityType: StravaActivityTypes): Array<IStravaActivityDetail> => {
    return activities
      .filter(activity => {
        return activity.type === activityType &&
          daysBetweenDates(new Date(activity.start_date_local), startDate) >= 0
      })
}

const ActivitiesWeekSummary: React.FunctionComponent<IWeekSummaryProps> = (props: IWeekSummaryProps) => {
  return (
    <div>
      <BarChart
        width={500}
        height={150}
        data={ getChartData(props.activities) }
        margin={{
          top: 5, right: 30, left: 0, bottom: 5,
        }}>
        <XAxis dataKey='day' />
        <YAxis />
        <Tooltip />
        <Bar dataKey='distance' fill='#8884d8' />
      </BarChart>
      <p className='text-muted'>Strava</p>
    </div>
  )
}
const mapStateToProps = (state: any) => {
  return {
    activities: filterActivities(
      state.activities.activityList,
      state.activitiesSummary.selectedActivity)
  }
}
export default connect(mapStateToProps)(ActivitiesWeekSummary)