import IUser from "../../models/User"
import axios from "axios"
import { ICredentials } from "../../models/Credentials"

const baseUrl = "/api/login"

const post = async (creds: ICredentials): Promise<IUser> => {
  console.log("Sending login for creds", creds)
  const response = await axios.post<IUser>(`${baseUrl}`, creds)
  console.log("response", response)
  return response.data
}

export default { post }