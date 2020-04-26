import axios from 'axios'

const URL = `https://api.covid19india.org/v2/state_district_wise.json`

export default axios.create({
	baseURL: URL
})
