import { IUser } from '../../common-types/user'
import { SET_USER, LOGOUT_USER, LOGIN_FAILED } from './constants'

interface ISetUserAction {
  type: typeof SET_USER,
  data: IUser
}
interface ILogoutUserAction {
  type: typeof LOGOUT_USER  
}
interface ILoginFailedAction {
  type: typeof LOGIN_FAILED
}

export type TUserActionTypes = ISetUserAction | ILogoutUserAction | ILoginFailedAction