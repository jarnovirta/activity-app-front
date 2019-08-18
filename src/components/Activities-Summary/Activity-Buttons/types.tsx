import { StravaActivityTypes } from '../../../common-types/strava-api/data/strava-activity-type'

export interface IActivityButtonsProps {
  setActivity: Function,
  selectedActivity: StravaActivityTypes
}