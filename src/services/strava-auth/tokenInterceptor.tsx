import { AxiosRequestConfig } from 'axios'
import IUser from '../../models/User'
import stravaAuthService from './../strava-auth'
import IStravaToken from '../../models/IStravaToken';

let user: IUser
let updateUser: Function

export const tokenInterceptor = (token: IStravaToken, setUser: Function) => async (config: AxiosRequestConfig): 
    Promise<AxiosRequestConfig> => {  
  const timeToTokenExpiration = token.expiresAt - (new Date().getTime() / 1000)
  if (timeToTokenExpiration < 0) {
    console.log("Interceptor refreshing token!")
    user.stravaToken = await stravaAuthService.refreshToken(user.id!)
    setUser(user)
  }
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${user.stravaToken!.accessToken}`
  }
  return config
}