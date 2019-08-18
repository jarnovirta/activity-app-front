import IStravaToken from './strava-api/strava-token'

export interface INewUser {
  firstName: string,
  lastName: string,
  username: string,
  password: string
}

export interface IUser extends INewUser {
  firstName: string,
  id: string,
  lastName: string,
  loginStatus?: TLoginStatus,
  stravaToken: IStravaToken,
  username: string,
  password: string
}

export interface ILoginCredentials {
  username: string,
  password: string
}

export type TLoginStatus = 'LOGGED_IN' | 'NOT_LOGGED_IN' | 'NOT_CHECKED'
