import IUser from '../../common-types/user'
import axios from 'axios'
const baseUrl = '/api/users'

const post = async (user:IUser):Promise<IUser> => {
  const response = await axios.post<IUser>(baseUrl, user)
  return response.data
}

export default { post }