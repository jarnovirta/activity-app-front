import baseAxios, { AxiosRequestConfig, AxiosInterceptorManager } from 'axios'
const axios = baseAxios.create()
import { StravaDetailedActivity } from "../../models/strava/strava-detailed-activity-iots"
import TStravaDetailedActivity from "../../models/strava/strava-detailed-activity-iots"
import { tokenInterceptor } from '../strava-auth/tokenInterceptor'
import IStravaToken from '../../models/IStravaToken';

const baseUrl = 'https://www.strava.com/api/v3/athlete/activities'


let updateUserState: Function
let tokenInterceptorRef: number

const setUpdateUserState = (setUser: Function) => {
  updateUserState = setUser
  
}
const setInterceptor = (token: IStravaToken) => {
  if (tokenInterceptorRef)
  axios.interceptors.request.eject(tokenInterceptorRef)
  axios.interceptors.request.use(tokenInterceptor(token, updateUserState))
}

const getAll = async ():Promise<Array<StravaDetailedActivity>> => {
  const response = await axios.get(baseUrl)
  const activities: Array<any> = response.data
  decodeActivities(activities)
  return activities
}

const decodeActivities = (activities:Array<any>) => {
  activities
    .forEach(activity => TStravaDetailedActivity.decode(activity))
}
export default { getAll, setInterceptor, setUpdateUserState }
