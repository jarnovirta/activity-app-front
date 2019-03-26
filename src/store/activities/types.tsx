import StravaDetailedActivity from "../../models/strava/strava-detailed-activity";

export const INITIALIZE_ACTIVITIES = 'INITIALIZE_ACTIVITIES'

export interface ActivitiesState {
  activities: StravaDetailedActivity[]
}
interface InitializeActivitiesAction {
  type: typeof INITIALIZE_ACTIVITIES,
  data: Array<StravaDetailedActivity>
}

export type ActivitiesActionTypes = InitializeActivitiesAction