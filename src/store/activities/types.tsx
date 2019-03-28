import { StravaDetailedActivity } from "../../models/strava/strava-detailed-activity-iots";

export const INITIALIZE_ACTIVITIES = 'INITIALIZE_ACTIVITIES'

interface InitializeActivitiesAction {
  type: typeof INITIALIZE_ACTIVITIES,
  data: Array<StravaDetailedActivity>
}

export type ActivitiesActionTypes = InitializeActivitiesAction