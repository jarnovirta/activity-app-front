import axios from 'axios'
import IStravaToken from '../../common-types/strava-token'

const baseUrl = '/api/stravaauth'

const getRedirectUrl = async ():Promise<String> => {
    const response = await axios.get(`${baseUrl}/redirectUrl`)
    const url: String = response.data
    return url
}

const refreshToken = async (userId: string):Promise<IStravaToken> => {
    const response = await axios.post(`${baseUrl}/refreshToken`, {
        userId
    })
    const token: IStravaToken = response.data
    return token
}

export default { getRedirectUrl, refreshToken }