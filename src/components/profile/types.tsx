import User from "../../models/User";
import StravaDetailedActivity from "../../models/strava/strava-detailed-activity";

export interface IProps {
  user: User,
  activitiesCount: number,
  latestActivity: StravaDetailedActivity
}