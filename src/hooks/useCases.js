import { useState, useEffect } from 'react'
import covidData from '../api/covidData'

const useCases = () => {
	const [cases, setCases] = useState([])
	const fetchData = async () => {
		const response = await covidData.get()
		const { cases_time_series: currentCases } = response.data
		const { length } = currentCases
		setCases(currentCases[length - 1])
	}

	useEffect(() => {
		fetchData()
	}, [])
	return cases
}

export default useCases
