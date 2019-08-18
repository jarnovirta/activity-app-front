import { RouteComponentProps } from 'react-router'
import { IActivitiesState } from '../../store/activities/types'
import { IUser } from '../../common-types/user'

export interface IAppProps extends RouteComponentProps<any> {
  setUser: Function,
  loginFailed: Function,
  activities: IActivitiesState,
  initializeActivities: Function,
  user: IUser
}