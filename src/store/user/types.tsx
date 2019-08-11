import IUser from "../../models/User";

export const SET_USER = 'SET_USER'

interface SetUserAction {
  type: typeof SET_USER,
  data: IUser
}

export type ActivitiesActionTypes = SetUserAction