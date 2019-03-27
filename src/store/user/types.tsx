import User from "../../models/User";

export const SET_USER = 'SET_USER'

interface SetUserAction {
  type: typeof SET_USER,
  data: User
}

export type ActivitiesActionTypes = SetUserAction