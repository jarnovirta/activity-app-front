import { Dispatch } from 'redux'
import { SET_USER, ActivitiesActionTypes } from './types'
import IUser from '../../models/User'
import userService from '../../services/user'
import loginService from '../../services/login'
import { ICredentials } from '../../models/Credentials';

const initialState: IUser = {
  firstName: '',
  lastName: '',
  username: ''
}
export const reducer = (state:IUser = initialState,
  action: ActivitiesActionTypes): IUser => {
  if (action.type === SET_USER) {
    return action.data
  }
  return state
}
export const login = (creds: ICredentials) => {
  return async (dispatch: Dispatch) => {
    const user: IUser = await loginService.post(creds)
    window.localStorage.setItem('FitnessAppUser', JSON.stringify(user))
    dispatch({
      type: SET_USER,
      data: user
    })
  }

}
export const setUser = (user: IUser) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: SET_USER,
      data: user
    })
  }
}

export const addUser = (user: IUser) => {
  return async (dispatch: Dispatch) => {
    const addedUser: IUser = await userService.post(user)
    window.localStorage.setItem('FitnessAppUser', JSON.stringify(addedUser))
    dispatch({
      type: SET_USER,
      data: user
    })
  }
}