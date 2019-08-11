export default interface IUser {
  firstName: string,
  lastName: string,
  username: string,
  password?: string,
  passwordHash?: string
}