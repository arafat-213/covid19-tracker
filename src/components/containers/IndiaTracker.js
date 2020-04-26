import React, { useEffect, useState } from 'react'
import Dashboard from '../Dashboard/Dashboard'
import StateTable from '../Tables/StateTable/StateTable'
import indiaAPI from '../../api/indiaAPI'
import _ from 'lodash'
import districtData from '../../api/districtAPI'

const IndiaTracker = () => {
	const [IndiaCases, setIndiaCases] = useState([])
	const [updateTimeStamp, setUpdateTimeStamp] = useState('')
	const [region, setRegion] = useState('India')
	const [stateCases, setStateCases] = useState([])
	const [districtCases, setDistrictCases] = useState([])

	useEffect(() => {
		const fetchData = async region => {
			const response = await indiaAPI.get()
			setIndiaCases(response.data.statewise[0])
			setUpdateTimeStamp(response.data.statewise[0].lastupdatedtime)
			setRegion('India')

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

			// Fetching data for distrcits
			const districtResponse = await districtData.get()
			const data = districtResponse.data
			setDistrictCases(data)
		}
		fetchData(region)
	}, [region])
	return (
		<div>
			<Dashboard
				cases={IndiaCases}
				time={updateTimeStamp}
				region={region}
			/>
			<StateTable data={stateCases} districtData={districtCases} />
		</div>
	)
}

export default IndiaTracker
