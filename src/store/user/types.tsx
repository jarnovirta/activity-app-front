import IUser from "../../models/User";

export const SET_USER = 'SET_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

interface SetUserAction {
  type: typeof SET_USER,
  data: IUser
}
interface LogoutUserAction {
  type: typeof LOGOUT_USER  
}

export type UserActionTypes = SetUserAction | LogoutUserAction