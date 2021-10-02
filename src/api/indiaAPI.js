import axios from 'axios'

const URL = `https://data.covid19india.org/data.json`

export default axios.create({
	baseURL: URL
})
