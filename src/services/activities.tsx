import baseAxios from 'axios'
const axios = baseAxios.create()
import { tokenInterceptor } from './strava-auth/tokenInterceptor'
import{ IUser } from '../common-types/user'
import IStravaActivityDetail from '../common-types/strava-api/data/strava-activity-detail'

const baseUrl = 'https://www.strava.com/api/v3/athlete/activities'

let tokenInterceptorRef: number

const setInterceptor = (user: IUser) => {
  if (tokenInterceptorRef)
  axios.interceptors.request.eject(tokenInterceptorRef)
  tokenInterceptorRef = axios.interceptors.request.use(tokenInterceptor(user))
}

const getAll = async ():Promise<Array<IStravaActivityDetail>> => {
  const response = await axios.get(baseUrl)
  return response.data  
}
const ejectInterceptor = () => {
  console.log('Ejecting interceptor')
  axios.interceptors.request.eject(tokenInterceptorRef)
}

export default { getAll, setInterceptor, ejectInterceptor }
