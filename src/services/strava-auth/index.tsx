import axios from 'axios'

const baseUrl = '/api/stravaauth'

const getRedirectUrl = async ():Promise<String> => {
    const response = await axios.get(`${baseUrl}/redirectUrl`)
    const url: String = response.data
    console.log("Got redirectUrl", url)
    return url
}

export default { getRedirectUrl }