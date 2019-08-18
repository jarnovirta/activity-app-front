import { TUserActionTypes } from './types'
import { IUser, INewUser } from '../../common-types/user'
import { SET_USER, LOGIN_FAILED, LOGOUT_USER } from './constants'

export const loginAction = (data: IUser): TUserActionTypes => {
  return {
    type: SET_USER,
    data
  }
}
export const loginFailedAction = (): TUserActionTypes => {
  return {
    type: LOGIN_FAILED
  }
}
export const logoutAction = (): TUserActionTypes => {
  return {
    type: LOGOUT_USER
  }
}
export const setUserAction = (data: IUser): TUserActionTypes =>  {
  return {
    type: SET_USER,
    data
  }
}
