import { useState, useEffect } from 'react'
import axios from 'axios'

const useDistrictCases = () => {
	const [districtCases, setDistrictCases] = useState([])

	const fetchData = async () => {
		const response = await axios.get(
			`https://api.covid19india.org/v2/state_district_wise.json`
		)
		const data = response.data
		console.log('District', data)
		setDistrictCases(data)
	}

	useEffect(() => {
		fetchData()
	}, [])
	return districtCases
}

export default useDistrictCases
