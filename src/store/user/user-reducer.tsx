import { Dispatch } from 'redux'
import { SET_USER, ActivitiesActionTypes } from './types'
import User from '../../models/User';

const initialState:User = {
  name: '',
  dob: undefined
}
export const reducer = (
  state = initialState,
  action: ActivitiesActionTypes): User =>
  {
    if (action.type === SET_USER) {
      return action.data
    }
    return state
  }

export const setUser = (user:User) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: SET_USER,
      data: user
    })
  }
}