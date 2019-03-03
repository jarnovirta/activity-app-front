import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as activitiesReducer,
  initializeActivities as initializeActivitiesReducer } from './reducers/activities-reducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  activities: activitiesReducer
})
const configureStore = () => {
  initializeActivitiesReducer()
  return createStore(
    reducer,
    applyMiddleware(thunk)
  )
}
export default configureStore()