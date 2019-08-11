import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as activitiesReducer,
  initializeActivities as initializeActivitiesReducer } from './activities/activities-reducer'
import { reducer as activitiesSummaryReducer } from './activities-summary/activitiesSummaryReducer'
import { reducer as userReducer } from './user/user-reducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  activities: activitiesReducer,
  activitiesSummary: activitiesSummaryReducer,
  user: userReducer
})
const configureStore = () => {
  return createStore(
    reducer,
    applyMiddleware(thunk)
  )
}
export default configureStore()
export type AppState = ReturnType<typeof reducer>