import { Dispatch } from 'redux'
import { StravaActivityType } from '../../models/strava/strava-activity-type';
import { SET_ACTIVITY, ActivitiesActionTypes, ActivitiesSummaryState } from './types'


const initialState:ActivitiesSummaryState = {
  selectedActivity: StravaActivityType.Ride
}
export const reducer = (state = initialState, action: ActivitiesActionTypes):ActivitiesSummaryState => {
  if (action.type === SET_ACTIVITY) {
    return { ...state, selectedActivity: action.data }
  }
  return state
}
export const setActivity = (activity:StravaActivityType) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SET_ACTIVITY,
      data: activity
    })
  }
}