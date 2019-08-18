import { ThunkAction } from 'redux-thunk'
import { IActivitiesState } from './types'
import { Action } from 'redux'
import IStravaActivityDetail from '../../common-types/strava-api/data/strava-activity-detail'
import { initActivitiesAction } from './actions'
import activityService from './../../services/activities'

export const initializeActivities = (): ThunkAction<void, IActivitiesState, null, Action<string>> =>
  async dispatch => {
    const activities: Array<IStravaActivityDetail> = await activityService.getAll()
    dispatch(initActivitiesAction(activities))
  }