import { StravaActivityType } from "../../models/strava/strava-activity-type";
import StravaDetailedActivity from "../../models/strava/strava-detailed-activity";

const getAll = async ():Promise<Array<StravaDetailedActivity>> => {
  let activities:Array<StravaDetailedActivity> = getActivityList(StravaActivityType.Ride)
  activities = activities.concat(getActivityList(StravaActivityType.Run))
  activities = activities.concat(getActivityList(StravaActivityType.Swim))

  return activities
}

const getActivityList = (activityType:StravaActivityType):Array<StravaDetailedActivity> => {
  let activities:Array<StravaDetailedActivity> = []
  let date:Date = new Date()
  for (let i = 0; i < 30; i++) {
    activities.push({
      "name" : "Happy Friday",
      "distance" : Math.floor(Math.random() * 30000 * 10) / 10,
      "moving_time" : Math.floor(Math.random() * 2 * 60 * 60 * 10) / 10,
      "elapsed_time" : Math.floor(Math.random() * 2 * 60 * 60 * 10) / 10,
      "type" : activityType,
      "workout_type" : 2,
      "id" : 154504250376823,
      "start_date_local" : date.toString(),
      "average_speed" : Math.floor(Math.random() * 17 * 10) / 10,
      "max_speed" : Math.floor(Math.random() * 30 * 10) / 10,
      "kilojoules" : Math.floor(Math.random() * 1200 * 10) / 10,
      "description" : "Some run",
      "calories" : Math.floor(Math.random() * 10000 * 10) / 10,
    })
    date.setDate(date.getDate() - 1)
  }
  return activities
}
export default { getAll }
