import IStravaActivityDetail from '../../common-types/strava-data/strava-activity-detail'

export interface IActivitiesState {
  initialized: boolean,
  activityList: Array<IStravaActivityDetail>
}

export const INITIALIZE_ACTIVITIES = 'INITIALIZE_ACTIVITIES'

interface InitializeActivitiesAction {
  type: typeof INITIALIZE_ACTIVITIES,
  data: Array<IStravaActivityDetail>
}

export type ActivitiesActionTypes = InitializeActivitiesAction