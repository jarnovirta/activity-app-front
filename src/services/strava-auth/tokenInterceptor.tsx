import axios, { AxiosRequestConfig } from 'axios'
import IUser from '../../models/User'
import IStravaToken from '../../models/IStravaToken'
import stravaAuthService from './../strava-auth'

export const tokenInterceptor = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  const loginDataString = window.localStorage.getItem('FitnessAppUser')
  if (!loginDataString) throw new Error('User not logged in')
  const user: IUser = JSON.parse(loginDataString) 
  if (!user.stravaToken || !user.id) return config
  const token: IStravaToken = user.stravaToken
  const secondsToExpiration = token.expiresAt - Math.round(new Date().getTime() / 1000)
  if (secondsToExpiration < 0) {
    console.log("Refreshing token!")
    user.stravaToken = await stravaAuthService.refreshToken(user.id)
    window.localStorage.setItem('FitnessAppUser', JSON.stringify(user))
  }
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${user.stravaToken.accessToken}`
  }
  return config
}
