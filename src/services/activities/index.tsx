import axios from 'axios'
import { StravaDetailedActivity } from "../../models/strava/stravaDetailedActivityIots"
import TStravaDetailedActivity from "../../models/strava/stravaDetailedActivityIots"

const baseUrl = '/strava-activities'

// TODO: add error handling
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

export default { getAll }
