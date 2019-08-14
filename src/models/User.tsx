import IStravaToken from "./IStravaToken";

export default interface IUser {
  firstName: string,
  id?: string,
  lastName: string,
  stravaToken?: IStravaToken,
  username: string,
  password?: string,
  passwordHash?: string
}