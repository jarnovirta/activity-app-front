import { StravaActivityType } from '../../../common-types/strava-api-data/strava-activity-type'

export interface IActivityButtonsProps {
  setActivity: Function,
  selectedActivity: StravaActivityType
}