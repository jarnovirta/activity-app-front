import User from "../../models/User";
import { StravaDetailedActivity } from "../../models/strava/stravaDetailedActivityIots"

export interface IProps {
  user: User,
  activitiesCount: number,
  latestActivity: StravaDetailedActivity
}