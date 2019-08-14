import IUser from "../../models/User"
import axios from "axios"
import { ICredentials } from "../../models/Credentials"

const baseUrl = "/api/login"

const post = async (creds: ICredentials): Promise<IUser> => {
  const response = await axios.post<IUser>(`${baseUrl}`, creds)
  return response.data
}

export default { post }