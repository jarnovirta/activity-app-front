import { IActivitiesState, TActivitiesActionTypes } from './types'
import { LOGOUT_USER } from '../user/constants'
import { INITIALIZE_ACTIVITIES } from './constants'

const initialState: IActivitiesState = {
  initialized: false,
  activityList: []
}

export const reducer = (
  state = initialState,
  action: TActivitiesActionTypes): IActivitiesState => {
  if (action.type === INITIALIZE_ACTIVITIES) {
    return { initialized: true, activityList: action.data }
  }
  if (action.type === LOGOUT_USER) {
    return initialState
  }
  return state
}
