import activityService from './../../services/activities'
import { Dispatch } from 'redux'

interface IAction {
  type: string,
  data: any
}
export const reducer = (activities = [], action: IAction) => {
  if (action.type === 'INITIALIZE_ACTIVITIES') {
    return action.data
  }
  return activities
}

export const initializeActivities = () => {
  return async (dispatch: Dispatch) => {
    const activities = await activityService.getAll()
    dispatch({
      type: 'INITIALIZE_ACTIVITIES',
      data: activities
    })
  }
}