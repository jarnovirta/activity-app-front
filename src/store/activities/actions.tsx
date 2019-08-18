import { TActivitiesActionTypes } from "./types";
import IStravaActivityDetail from "../../common-types/strava-api/data/strava-activity-detail";
import { INITIALIZE_ACTIVITIES } from "./constants"

export const initActivitiesAction = (data: Array<IStravaActivityDetail>): TActivitiesActionTypes => {
  return {
    type: INITIALIZE_ACTIVITIES,
    data
  }
}