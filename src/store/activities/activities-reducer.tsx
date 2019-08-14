import activityService from '../../services/activities'
import { Dispatch } from 'redux'
import { IActivitiesState, ActivitiesActionTypes, INITIALIZE_ACTIVITIES } from './types'
import { StravaDetailedActivity } from '../../models/strava/strava-detailed-activity-iots'
import IStravaToken from '../../models/IStravaToken';

const initialState: IActivitiesState = { 
  initialized: false,
  activityList: []
}

export const reducer = (
  state = initialState,
  action: ActivitiesActionTypes): IActivitiesState =>
  {
    if (action.type === INITIALIZE_ACTIVITIES) {
      return { initialized: true, activityList: action.data }
    }
    return state
  }

export const initializeActivities = (stravaAccessToken: IStravaToken) => {
  return async (dispatch: Dispatch) => {
    
    const activities: Array<StravaDetailedActivity> = await activityService.getAll()
    console.log("dispatcher got activities")
    dispatch({
      type: INITIALIZE_ACTIVITIES,
      data: activities
    })
  }
}