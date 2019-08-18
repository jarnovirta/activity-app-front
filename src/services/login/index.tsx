import { IUser, ICredentials } from '../../common-types/user'
import axios, { AxiosResponse } from 'axios'

const baseUrl = '/api/login'

// TODO: add axios interceptor on login

const login = async (creds: ICredentials): Promise<AxiosResponse<IUser>> => {
  try {
    const response = await axios.post<IUser>(`${baseUrl}`, creds)
    console.log('Service logged in user',)
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
  return await axios.get<IUser>(`${baseUrl}/currentUser`)
}

export default { login, currentUser, logout }