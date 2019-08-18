import { TActivitiesActionTypes } from './types';
import { SET_ACTIVITY } from './constants';
import { StravaActivityTypes } from '../../common-types/strava-api/data/strava-activity-type';

export const setActivityAction = (data: StravaActivityTypes): TActivitiesActionTypes => {
  return {
    type: SET_ACTIVITY,
    data
  }
}