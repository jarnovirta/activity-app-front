import User from "../../models/User"
import axios from "axios"

const baseUrl = "/api/login"

const post = async (userName: string, 
  password: string):Promise<User> => {
const params = {
  userName,
  password
}
const response = await axios.post<User>(`${baseUrl}/login`, params)
return response.data  
}

export default { post }