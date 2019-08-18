import { StravaActivityTypes } from '../../common-types/strava-api/data/strava-activity-type';
import { ThunkAction } from 'redux-thunk'
import { IActivitiesState } from '../activities/types'
import { Action } from 'redux'
import { setActivityAction } from './actions'
import IStravaActivityDetail from '../../common-types/strava-api/data/strava-activity-detail'
import { initActivitiesAction } from '../activities/actions'
import activityService from './../../services/activities'

export const setActivity = (activity: StravaActivityTypes):
  ThunkAction<void, IActivitiesState, null, Action<string>> =>
  dispatch => {
    dispatch(setActivityAction(activity))
  }

export const initializeActivities = (): ThunkAction<void, IActivitiesState, null, Action<string>> =>
  async dispatch => {
    const activities: Array<IStravaActivityDetail> = await activityService.getAll()
    dispatch(initActivitiesAction(activities))
  }