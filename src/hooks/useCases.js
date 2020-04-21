import { useState, useEffect } from 'react'
import covidData from '../api/covidData'

const useCases = () => {
	const [cases, setCases] = useState([])
	const [updateTimeStamp, setUpdateTimeStamp] = useState('')

	const fetchData = async () => {
		const response = await covidData.get()
		const { cases_time_series: currentCases } = response.data
		const { length } = currentCases

		const lengthTested = response.data.tested.length
		const updateTimeStamp =
			response.data.tested[lengthTested - 1].updatetimestamp

		setCases(currentCases[length - 1])
		setUpdateTimeStamp(updateTimeStamp)
	}

	useEffect(() => {
		fetchData()
	}, [])
	//console.log(cases)
	console.log('time stamp', updateTimeStamp)

	return { cases, updateTimeStamp }
}

export default useCases
