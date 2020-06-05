import axios from 'axios'

const URL = `https://api.covid19india.org/updatelog/log.json`

export default axios.create({
	baseURL: URL
})
