import StravaDetailedActivity from "../../../models/strava/strava-detailed-activity";

export interface IProps {
  activities: Array<StravaDetailedActivity>
}
export interface IChartData {
  day: string,
  distance: number
}