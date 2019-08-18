import activityService from '../../services/activities'
import { Dispatch } from 'redux'
import { IActivitiesState, ActivitiesActionTypes, INITIALIZE_ACTIVITIES } from './types'
import { LOGOUT_USER } from '../user/types'
import IStravaActivityDetail from '../../common-types/strava-data/strava-activity-detail'

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
    if (action.type === LOGOUT_USER) {
      return initialState      
    }
    return state
  }

export const initializeActivities = () => {
  return async (dispatch: Dispatch) => {
    const activities: Array<IStravaActivityDetail> = await activityService.getAll()
    dispatch({
      type: INITIALIZE_ACTIVITIES,
      data: activities
    })
  }
}