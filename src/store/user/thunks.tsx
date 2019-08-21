import { ILoginCredentials, IUser, INewUser } from '../../common-types/user'
import { ThunkAction } from 'redux-thunk'
import { Action, Dispatch } from 'redux'
import { loginFailedAction, setUserAction, logoutAction } from './actions'
import loginService from './../../services/login'
import userService from './../../services/users'
import activitiesService from './../../services/activities'

export const login = (creds: ILoginCredentials): ThunkAction<void, IUser, null, Action<string>> =>
  async dispatch => {
    try {
      const user: IUser = await loginService.login(creds)
      activitiesService.setInterceptor(user)
      dispatch(setUserAction(user))
    }
    catch (e) {
      console.log('Login failed: ', e.code, e.message)
    }
  }
export const loginFailed = (): ThunkAction<void, void, null, Action<string>> =>
  dispatch => {
    dispatch(loginFailedAction())
  }
export const setUser = (user: IUser): ThunkAction<void, IUser, null, Action<string>> => { 
  activitiesService.setInterceptor(user)
  return (dispatch: Dispatch) => {    
    dispatch(setUserAction(user))
  }
}
export const logout = (): ThunkAction<void, void, null, Action<string>> =>
  async dispatch => {
    try {
      loginService.logout()
      activitiesService.ejectInterceptor()
      dispatch(logoutAction())
    }
    catch (e) {
      console.log('Logout failed: ', e.code, e.message)
    }
    dispatch(logoutAction())
  }
export const addNewUser = (user: INewUser): ThunkAction<void, IUser, null, Action<string>> =>
  async dispatch => {
    try {
      const addedUser: IUser = await userService.post(user)
      activitiesService.setInterceptor(addedUser)
      dispatch(setUserAction(addedUser))
    }
    catch (e) {
      console.log('Adding new user failed: ', e.code, e.message)
    }
  }