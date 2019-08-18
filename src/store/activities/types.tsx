import IStravaActivityDetail from '../../common-types/strava-api/data/strava-activity-detail'
import { INITIALIZE_ACTIVITIES } from './constants'

export interface IActivitiesState {
  initialized: boolean,
  activityList: Array<IStravaActivityDetail>
}

export interface IInitializeActivitiesAction {
  type: typeof INITIALIZE_ACTIVITIES,
  data: Array<IStravaActivityDetail>
}

export type TActivitiesActionTypes = IInitializeActivitiesAction