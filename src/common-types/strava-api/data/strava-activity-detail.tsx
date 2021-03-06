import { StravaActivityTypes } from './strava-activity-type'

export default interface IStravaActivityDetail {
  id: number,             // activitys Strava-id
  name: string,           // activity's name
  distance: number,       // meters
  moving_time: number,    // seconds
  elapsed_time: number,   // seconds
  type: StravaActivityTypes,
  start_date_local: string,  // activity's local start time
  workout_type: number,
  average_speed: number,  // meters per second
  max_speed: number,      // meters per second
  kilojoules: number,      // total work in kJ, only bike rides
  description: string,     // description of the activity
  calories: number        // kilocalories consumed during activity
}