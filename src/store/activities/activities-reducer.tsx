import activityService from '../../services/activities'
import { Dispatch } from 'redux'
import { ActivitiesState, ActivitiesActionTypes, INITIALIZE_ACTIVITIES } from './types'
import StravaDetailedActivity from '../../models/strava/strava-detailed-activity';

const initialState: ActivitiesState = {
  activities: []
}
export const reducer = (
  state = initialState,
  action: ActivitiesActionTypes): ActivitiesState =>
  {
    if (action.type === INITIALIZE_ACTIVITIES) {
      return { activities: action.data }
    }
    return state
  }

export const initializeActivities = () => {
  return async (dispatch: Dispatch) => {
    const activities:Array<StravaDetailedActivity> = await activityService.getAll()
    dispatch({
      type: INITIALIZE_ACTIVITIES,
      data: activities
    })
  }
}