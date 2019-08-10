import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as activitiesReducer,
  initializeActivities as initializeActivitiesReducer } from './activities/activitiesReducer'
import { reducer as activitiesSummaryReducer } from './activitiesSummary/activitiesSummaryReducer'
import { reducer as userReducer } from './user/userReducer'
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