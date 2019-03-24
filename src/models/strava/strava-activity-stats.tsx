import StravaActivityTotal from "./strava-activity-total";

export default interface StravaActivityStats {
  biggest_ride_distance: number,             // The longest distance ridden by the athlete
  biggest_climb_elevation_gain: number,      // The highest climb ridden by the athlete
  recent_ride_totals: StravaActivityTotal,   // The recent (last 4 weeks) ride stats for the athlete
  recent_run_totals: StravaActivityTotal,    // The recent (last 4 weeks) run stats for the athlete
  recent_swim_totals: StravaActivityTotal,   // The recent (last 4 weeks) swim stats for the athlete
  ytd_ride_totals: StravaActivityTotal,      // The year to date ride stats for the athlete
  ytd_run_totals: StravaActivityTotal,       // The year to date run stats for the athlete
  ytd_swim_totals: StravaActivityTotal,      // The year to date swim stats for the athlete
  all_ride_totals: StravaActivityTotal,      // The all time ride stats for the athlete
  all_run_totals: StravaActivityTotal,       // The all time run stats for the athlete
  all_swim_totals: StravaActivityTotal       // The all time swim stats for the athlete
}