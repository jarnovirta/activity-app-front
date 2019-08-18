
export interface IUser {
  firstName: string,
  id?: string,
  lastName: string,
  loginStatus?: TLoginStatus,
  stravaToken?: IStravaToken,
  username: string,
  password?: string,
  passwordHash?: string
}

export interface ICredentials {
  username: string,
  password: string
}

export type TLoginStatus = 'LOGGED_IN' | 'NOT_LOGGED_IN' | 'NOT_CHECKED'

export interface IStravaToken {
  accessToken: string,
  expiresAt: number
}