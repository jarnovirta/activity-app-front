import IStravaToken from "./IStravaToken";
import { LoginStatus } from "./LoginStatus";

export default interface IUser {
  firstName: string,
  id?: string,
  lastName: string,
  logInStatus?: LoginStatus,
  stravaToken?: IStravaToken,
  username: string,
  password?: string,
  passwordHash?: string
}