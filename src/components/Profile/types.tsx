import IUser from '../../common-types/user'
import { IStravaActivityDetail } from '../../common-types/strava-data/strava-activity-detail'

export interface IProps {
  user: IUser,
  activitiesCount: number,
  latestActivity: IStravaActivityDetail
}