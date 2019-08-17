import { Dispatch } from 'redux'
import { SET_USER, LOGOUT_USER, UserActionTypes } from './types'
import IUser from '../../models/User'
import userService from '../../services/user'
import loginService from '../../services/login'
import { ICredentials } from '../../models/Credentials';
import { AxiosResponse, AxiosError } from 'axios';

export const reducer = (state: IUser = { logInStatus: "NOT_CHECKED" } as IUser,
  action: UserActionTypes): IUser => {
  if (action.type === SET_USER) {
    return { ...action.data, logInStatus: "LOGGED_IN" }
  }
  if (action.type === LOGOUT_USER) {
    return { logInStatus: "NOT_LOGGED_IN" } as IUser
  }
  return state
}
export const login = (creds: ICredentials) => {
  return async (dispatch: Dispatch) => {
    try {
      const response: AxiosResponse<IUser> = await loginService.login(creds)
      return dispatch({
          type: SET_USER,
          data: response.data  
      })
    }
    catch (e) {
      console.log("Login failed: ", e.code, e.message)      
    }    
  }
}
export const logout = () => {
  return async (dispatch: Dispatch) => {
    await loginService.logout()

    dispatch({
      type: LOGOUT_USER
    })
  }
}
export const setUser = (user: IUser) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SET_USER,
      data: user
    })
  }
}

export const addUser = (user: IUser) => {
  return async (dispatch: Dispatch) => {
    const addedUser: IUser = await userService.post(user)
    dispatch({
      type: SET_USER,
      data: addedUser
    })
  }
}