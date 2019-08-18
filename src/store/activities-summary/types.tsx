import { StravaActivityType } from '../../common-types/strava-api-data/strava-activity-type';

export const SET_ACTIVITY = 'SET_ACTIVITY'

export interface ActivitiesSummaryState {
  selectedActivity: StravaActivityType
}
interface SetActivityAction {
  type: typeof SET_ACTIVITY,
  data: StravaActivityType
}

export type ActivitiesActionTypes = SetActivityAction