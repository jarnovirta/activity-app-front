import activityService from '../../services/activities'
import { Dispatch } from 'redux'
import { ActivitiesActionTypes, INITIALIZE_ACTIVITIES } from './types'
import { StravaDetailedActivity } from '../../models/strava/strava-detailed-activity-iots'

const initialState: Array<StravaDetailedActivity>  = []

export const reducer = (
  state = initialState,
  action: ActivitiesActionTypes): Array<StravaDetailedActivity> =>
  {
    if (action.type === INITIALIZE_ACTIVITIES) {
      return action.data
    }
    return state
  }

export const initializeActivities = () => {
  return async (dispatch: Dispatch) => {
    const activities: Array<StravaDetailedActivity> = await activityService.getAll()
    dispatch({
      type: INITIALIZE_ACTIVITIES,
      data: activities
    })
  }
}