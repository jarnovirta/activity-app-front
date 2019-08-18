import { StravaActivityType } from '../../../common-types/strava-data/strava-activity-type'

export interface IActivityButtonsProps {
  setActivity: Function,
  selectedActivity: StravaActivityType
}