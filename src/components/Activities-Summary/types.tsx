import IStravaActivityDetail from '../../common-types/strava-api-data/strava-activity-detail'

export interface IActivitiesSummaryProps {
  activities: Array<IStravaActivityDetail>
}