import IStravaActivityDetail from '../../../common-types/strava-api/data/strava-activity-detail'

export interface IWeekSummaryProps {
  activities: Array<IStravaActivityDetail>
}
export interface IChartData {
  day: string,
  distance: number
}