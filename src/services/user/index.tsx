import User from "../../models/User"
import axios from "axios"
const baseUrl = "/api/users"

const login = async (userName: string, 
    password: string):Promise<User> => {
  const params = {
    userName,
    password
  }
  const response = await axios.post<User>(`${baseUrl}/login`, params)
  return response.data  
}

const addUser = async (user:User):Promise<User> => {
  const response = await axios.post<User>(baseUrl, user)
  return response.data
}

export default { login, addUser }