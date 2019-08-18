import { IUser } from '../../common-types/user'

export interface INavigationProps {
  logout: Function,
  user: IUser
}