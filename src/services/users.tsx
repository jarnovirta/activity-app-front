import { IUser, INewUser } from '../common-types/user'
import axios from 'axios'
const baseUrl = '/api/users'

const post = async (user:INewUser): Promise<IUser> => {
  const response = await axios.post<IUser>(baseUrl, user)
  return response.data
}

export default { post }