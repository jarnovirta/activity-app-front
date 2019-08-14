import { StravaDetailedActivity } from "../../models/strava/strava-detailed-activity-iots";


export interface IActivitiesState {
  initialized: boolean,
  activityList: Array<StravaDetailedActivity>
}

export const INITIALIZE_ACTIVITIES = 'INITIALIZE_ACTIVITIES'

interface InitializeActivitiesAction {
  type: typeof INITIALIZE_ACTIVITIES,
  data: Array<StravaDetailedActivity>
}

export type ActivitiesActionTypes = InitializeActivitiesAction