import * as t from 'io-ts'
import StravaActivityType from './strava-activity-type'

// Type of StravaDetailedActivity
export type StravaDetailedActivity = t.TypeOf<typeof TStravaDetailedActivity>;

// Validator
export const TStravaDetailedActivity = t.type({
  id: t.number,             // activitys Strava-id
  name: t.string,           // activity's name
  distance: t.number,       // meters
  moving_time: t.number,    // seconds
  elapsed_time: t.number,   // seconds
  type: StravaActivityType,
  start_date_local: t.string,  // activity's local start time
  workout_type: t.number,
  average_speed: t.number,  // meters per second
  max_speed: t.number,      // meters per second
  kilojoules: t.number,      // total work in kJ, only bike rides
  description: t.string,     // description of the activity
  calories: t.number        // kilocalories consumed during activity
});