import { IUser } from '../../common-types/user'

export const SET_USER = 'SET_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export interface ICredentials {
  username: string,
  password: string
}
interface SetUserAction {
  type: typeof SET_USER,
  data: IUser
}
interface LogoutUserAction {
  type: typeof LOGOUT_USER  
}
interface LoginFailedAction {
  type: typeof LOGIN_FAILED
}

export type UserActionTypes = SetUserAction | LogoutUserAction | LoginFailedAction