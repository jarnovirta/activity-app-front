import { AxiosRequestConfig } from 'axios'
import IUser from '../../models/User'
import stravaAuthService from './../strava-auth'

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