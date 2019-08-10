import { StravaDetailedActivity } from "../../../models/strava/stravaDetailedActivityIots";

export interface IProps {
  activities: Array<StravaDetailedActivity>
}
export interface IChartData {
  day: string,
  distance: number
}