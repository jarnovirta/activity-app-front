import { Dispatch } from 'redux'
import { SET_USER, LOGOUT_USER, LOGIN_FAILED, UserActionTypes } from './types'
import IUser from '../../common-types/user'
import userService from '../../services/user'
import loginService from '../../services/login'
import { ICredentials } from '../../common-types/credentials'
import { AxiosResponse } from 'axios'
import activityService from './../../services/activities'

export const reducer = (state: IUser = { loginStatus: 'NOT_CHECKED' } as IUser,
  action: UserActionTypes): IUser => {
  if (action.type === SET_USER) {
    return { ...action.data, loginStatus: 'LOGGED_IN' }
  }
  if (action.type === LOGOUT_USER || action.type === LOGIN_FAILED) {
    return { loginStatus: 'NOT_LOGGED_IN' } as IUser
  }
  
  return state
}
export const login = (creds: ICredentials) => {
  return async (dispatch: Dispatch) => {
    try {
      const response: AxiosResponse<IUser> = await loginService.login(creds)
      console.log('dispatcing ', response.data)
      return dispatch({
          type: SET_USER,
          data: response.data  
      })
    }
    catch (e) {
      console.log('Login failed: ', e.code, e.message)      
    }    
  }
}
export const loginFailed = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: LOGIN_FAILED
    })
  }  
}
export const logout = () => {
  return async (dispatch: Dispatch) => {
    await loginService.logout()
    activityService.ejectInterceptor()
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

