import { useState, useEffect } from 'react'
import covidData from '../api/covidData'
import _ from 'lodash'

const useStateCases = () => {
	const [stateCases, setStateCases] = useState([])
	const fetchData = async () => {
		const response = await covidData.get()

		const { statewise } = response.data

		_.remove(statewise, obj => obj.state === 'Total')
		console.log('state wise', response.data)

		// Axios parses data not in a way this app needs
		// Please don't touch it.
		// It's stupid, but it works.
		const jsondata = await JSON.stringify(statewise)
		const parsedData = await JSON.parse(jsondata, (k, v) => {
			return typeof v === 'object' || isNaN(v) ? v : parseInt(v, 10)
		})
		setStateCases(parsedData)
	}

	useEffect(() => {
		fetchData()
	}, [])

	return stateCases
}

export default useStateCases
