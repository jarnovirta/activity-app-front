import { IUser, ILoginCredentials} from '../common-types/user'
import axios, { AxiosResponse } from 'axios'

const baseUrl = '/api/login'

// TODO: add axios interceptor on login

const login = async (creds: ILoginCredentials): Promise<IUser> => {
  try {
    const response = await axios.post<IUser>(`${baseUrl}`, creds)
    return response.data
  }
  catch (e) {    
    throw Error(e)
  }  
}
const logout = async (): Promise<any> => {
  await axios.post(`${baseUrl}/logout`)  
}
const currentUser = async (): Promise<IUser> => { 
  const response = await axios.get<IUser>(`${baseUrl}/currentUser`)
  return response.data
}

export default { login, currentUser, logout }