import axios from 'axios'

const URL = `https://api.covid19api.com`

export default axios.create({
	baseURL: URL
})
