import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as activitiesReducer } from './activities/reducer'
import { reducer as activitiesSummaryReducer } from './activities-summary/reducer'
import { reducer as userReducer } from './user/reducer'
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