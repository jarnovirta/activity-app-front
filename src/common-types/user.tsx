import IStravaToken from './strava-token'
import TLoginStatus from './login-status'

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