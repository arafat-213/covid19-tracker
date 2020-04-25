import { useState, useEffect } from 'react'
import covidData from '../api/covidData'

const useCases = () => {
	const [cases, setCases] = useState([])
	const [updateTimeStamp, setUpdateTimeStamp] = useState('')

	const fetchData = async () => {
		const response = await covidData.get()
		const currentCases = response.data.statewise[0]

		const updateTimeStamp = response.data.statewise[0].lastupdatedtime

		setCases(currentCases)
		setUpdateTimeStamp(updateTimeStamp)
	}

	let currentCases = null
	useEffect(() => {
		// fetchData()
		covidData
			.get()
			.then(response => setCases(response.data.statewise[0]))
			.catch()
	}, [currentCases])
	console.log(cases)
	console.log('time stamp', updateTimeStamp)

	return { cases, updateTimeStamp }
}

export default useCases
