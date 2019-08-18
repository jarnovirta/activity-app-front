import IUser from "../../models/User";
import { StravaDetailedActivity } from "../../models/strava/strava-detailed-activity-iots"

export interface IProps {
  user: IUser,
  activitiesCount: number,
  latestActivity: StravaDetailedActivity
}