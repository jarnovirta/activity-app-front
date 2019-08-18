import IStravaToken from './../common-types/strava-token'
import { TLoginStatus } from './../common-types/login-status'


export default interface IUser {
  firstName: string,
  id?: string,
  lastName: string,
  loginStatus?: TLoginStatus,
  stravaToken?: IStravaToken,
  username: string,
  password?: string,
  passwordHash?: string
}