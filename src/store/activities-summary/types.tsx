import { StravaActivityTypes } from '../../common-types/strava-api/data/strava-activity-type';
import { SET_ACTIVITY } from './constants'

export interface IActivitiesSummaryState {
  selectedActivity: StravaActivityTypes
}

interface ISetActivityAction {
  type: typeof SET_ACTIVITY,
  data: StravaActivityTypes
}

export type TActivitiesActionTypes = ISetActivityAction