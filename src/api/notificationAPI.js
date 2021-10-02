import axios from 'axios'

const URL = `https://floating-ravine-67072.herokuapp.com/https://api.covid19india.org/updatelog/log.json`

export default axios.create({
	baseURL: URL
})
