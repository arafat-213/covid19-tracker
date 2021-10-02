import axios from 'axios'

const URL = `https://floating-ravine-67072.herokuapp.com/https://api.covid19india.org/v2/state_district_wise.json`

export default axios.create({
	baseURL: URL
})
