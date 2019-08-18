import { TUserActionTypes } from './types'
import { IUser } from '../../common-types/user'
import { SET_USER, LOGOUT_USER, LOGIN_FAILED } from './constants'

export const reducer = (state: IUser = { loginStatus: 'NOT_CHECKED' } as IUser,
  action: TUserActionTypes): IUser => {
  if (action.type === SET_USER) {
    return { ...action.data, loginStatus: 'LOGGED_IN' }
  }
  if (action.type === LOGOUT_USER || action.type === LOGIN_FAILED) {
    return { loginStatus: 'NOT_LOGGED_IN' } as IUser
  }
  return state
}

