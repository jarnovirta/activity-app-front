import { AxiosRequestConfig } from 'axios'
import IUser from '../../models/User'
import stravaAuthService from './../strava-auth'

export const tokenInterceptor = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  const user: IUser = getLoggedInUser()
  if (!user || !user.stravaToken) return config
  const timeToTokenExpiration = user.stravaToken.expiresAt - (new Date().getTime() / 1000)
  if (timeToTokenExpiration < 0) {
    console.log("Refreshing token!")
    user.stravaToken = await stravaAuthService.refreshToken(user.id!)
    window.localStorage.setItem('FitnessAppUser', JSON.stringify(user))
  }
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${user.stravaToken.accessToken}`
  }
  return config
}

const getLoggedInUser = ():IUser => {
  const loginDataString = window.localStorage.getItem('FitnessAppUser')
  if (!loginDataString) throw new Error('User not logged in')
  return JSON.parse(loginDataString) 
}