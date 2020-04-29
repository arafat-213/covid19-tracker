import axios from 'axios'

const URL = `https://api.covid19india.org/state_test_data.json`

export default axios.create({
	baseURL: URL
})
