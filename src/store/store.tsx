import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as activitiesReducer,
  initializeActivities as initializeActivitiesReducer } from './activities/activities-reducer'
import { reducer as activitiesSummaryReducer } from './activities-summary/activities-summary-reducer'
import { reducer as userReducer } from './user/user-reducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  activities: activitiesReducer,
  activitiesSummary: activitiesSummaryReducer,
  user: userReducer
})
const configureStore = () => {
  initializeActivitiesReducer()
  return createStore(
    reducer,
    applyMiddleware(thunk)
  )
}
export default configureStore()