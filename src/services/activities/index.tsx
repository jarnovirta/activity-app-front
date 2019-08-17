import baseAxios from 'axios'
const axios = baseAxios.create()
import { StravaDetailedActivity } from "../../models/strava/strava-detailed-activity-iots"
import TStravaDetailedActivity from "../../models/strava/strava-detailed-activity-iots"
import { tokenInterceptor } from '../strava-auth/tokenInterceptor'
import IStravaToken from '../../models/IStravaToken';
import IUser from '../../models/User';

const baseUrl = 'https://www.strava.com/api/v3/athlete/activities'

let token: IStravaToken
let tokenInterceptorRef: number


const setInterceptor = (user: IUser) => {
  if (tokenInterceptorRef)
  axios.interceptors.request.eject(tokenInterceptorRef)
  token = user.stravaToken!
  tokenInterceptorRef = axios.interceptors.request.use(tokenInterceptor(user))
}

const getAll = async ():Promise<Array<StravaDetailedActivity>> => {
  const response = await axios.get(baseUrl)
  const activities: Array<any> = response.data
  decodeActivities(activities)
  return activities
}
const ejectInterceptor = () => {
  console.log("Ejecting interceptor")
  axios.interceptors.request.eject(tokenInterceptorRef)
}
const decodeActivities = (activities:Array<any>) => {
  activities
    .forEach(activity => TStravaDetailedActivity.decode(activity))
}
export default { getAll, setInterceptor, ejectInterceptor }
