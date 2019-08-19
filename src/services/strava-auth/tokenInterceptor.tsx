import { AxiosRequestConfig } from 'axios'
import { IUser } from '../../common-types/user'
import stravaAuthService from './strava-auth'

// Axios interceptor to intercept requests to Strava API.
// Adds an OAuth access token to all requests. Requests
// a fresh token fron backend if expired. User data (token and id) 
// are stored locally. Interceptor is set on login and removed on
// logout by store's user thunks

let user:IUser

export const tokenInterceptor = (newUser: IUser) => async (config: AxiosRequestConfig): 
    Promise<AxiosRequestConfig> => {  
  user = newUser
  const timeToTokenExpiration = user.stravaToken!.expiresAt - (new Date().getTime() / 1000)
  if (timeToTokenExpiration < 0) {
    user.stravaToken = await stravaAuthService.refreshToken(user.id!)    
  }
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${user.stravaToken!.accessToken}`
  }
  return config
}