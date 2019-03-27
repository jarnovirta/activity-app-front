import User from "../../models/User";

const getUser = async ():Promise<User> => {
  return {
    name: 'Jarno Virta',
    dob: new Date()
  }
}
export default { getUser }