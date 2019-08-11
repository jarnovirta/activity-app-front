import axios from 'axios'
import { StravaDetailedActivity } from "../../models/strava/strava-detailed-activity-iots"
import TStravaDetailedActivity from "../../models/strava/strava-detailed-activity-iots"

const baseUrl = 'https://www.strava.com/api/v3/athlete/activities'


// TODO: add error handling
const getAll = async (stravaAccessToken: string):Promise<Array<StravaDetailedActivity>> => {
  const params = {
    "headers": {
      "Authorization": `Bearer ${stravaAccessToken}`
    }
  }
  const response = await axios.get(baseUrl, params)
  console.log("Activities response", response.data)
  const activities: Array<any> = response.data
  decodeActivities(activities)
  return activities
}

const decodeActivities = (activities:Array<any>) => {
  activities
    .forEach(activity => TStravaDetailedActivity.decode(activity))
}

export default { getAll }
