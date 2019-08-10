import { Dispatch } from 'redux'
import { SET_USER, ActivitiesActionTypes } from './types'
import User from '../../models/User'
import userService from '../../services/user'

const initialState:User = {
  firstName: 'first',
  lastName: 'lastname',
  username: 'username'
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

export const addUser = (user:User) => {  
  return async (dispatch: Dispatch) => {
    user = await userService.post(user)
    dispatch({
      type: SET_USER,
      data: user
    })
  }
}