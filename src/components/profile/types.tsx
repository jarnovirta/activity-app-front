import User from "../../models/User";
import { StravaDetailedActivity } from "../../models/strava/strava-detailed-activity-iots"

export interface IProps {
  user: User,
  activitiesCount: number,
  latestActivity: StravaDetailedActivity
}