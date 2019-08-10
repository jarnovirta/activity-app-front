import User from "../../models/User"
import axios from "axios"
const baseUrl = "/api/users"

const post = async (user:User):Promise<User> => {
  console.log("Adding user")
  const response = await axios.post<User>(baseUrl, user)
  console.log("added user", response.data)
  return response.data
}

export default { post }