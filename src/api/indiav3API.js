import axios from 'axios'

const URL = `https://api.covid19india.org/v3/min/data.min.json`

export default axios.create({
	baseURL: URL
})
