import { StravaActivityTypes } from '../../common-types/strava-api/data/strava-activity-type'
import { TActivitiesActionTypes, IActivitiesSummaryState } from './types'
import { SET_ACTIVITY } from './constants'

const initialState: IActivitiesSummaryState = {
  selectedActivity: StravaActivityTypes.Ride
}
export const reducer = (state = initialState,
  action: TActivitiesActionTypes): IActivitiesSummaryState => {
  if (action.type === SET_ACTIVITY) {
    return { ...state, selectedActivity: action.data }
  }
  return state
}
