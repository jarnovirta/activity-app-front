import IUser from "../../models/User"
import axios, { AxiosResponse, AxiosError } from "axios"
import { ICredentials } from "../../models/Credentials"

const baseUrl = "/api/login"

const login = async (creds: ICredentials): Promise<AxiosResponse<IUser>> => {
  try {
    const response = await axios.post<IUser>(`${baseUrl}`, creds)
    return response
  }
  catch (e) {    
    throw Error(e)
  }  
}
const logout = async (): Promise<any> => {
  await axios.post(`${baseUrl}/logout`)  
}
const currentUser = async (): Promise<AxiosResponse<IUser>> => { 
  const rejectErrorsConf = {
    validateStatus: function (status: number) {
      return status === 200 || status === 401;
    }
  }  
  return await axios.get<IUser>(`${baseUrl}/currentUser`, rejectErrorsConf).catch((e: AxiosError) => { 
    throw (e)
  })  
}

export default { login, currentUser, logout }