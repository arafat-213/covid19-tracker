import React, { useEffect, useState } from 'react'
import Dashboard from '../Dashboard/Dashboard'
import StateTable from '../Tables/StateTable/StateTable'
import indiaAPI from '../../api/indiaAPI'
import _ from 'lodash'
import districtData from '../../api/districtAPI'
import Tested from '../Messages/Tested'
import stateTestingAPI from '../../api/stateTestingAPI'

const IndiaTracker = () => {
	const [IndiaCases, setIndiaCases] = useState([])
	const [updateTimeStamp, setUpdateTimeStamp] = useState('')
	const [region, setRegion] = useState('India')
	const [stateCases, setStateCases] = useState([])
	const [districtCases, setDistrictCases] = useState([])
	const [IndiaTested, setIndiaTested] = useState(0)
	const [testUpdatedTime, setTestUpdatedTime] = useState()
	const [stateTestNumbers, setStateTestNumbers] = useState(0)

	useEffect(() => {
		const fetchData = async region => {
			const response = await indiaAPI.get()
			console.log(response.data)
			setIndiaCases(response.data.statewise[0])
			setUpdateTimeStamp(response.data.statewise[0].lastupdatedtime)
			setRegion('India')

			const { statewise, tested } = response.data
			setIndiaTested(tested[tested.length - 1].totalsamplestested)
			setTestUpdatedTime(tested[tested.length - 1].updatetimestamp)
			_.remove(statewise, obj => obj.state === 'Total')

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

			//Fetching state test numbers
			const {
				data: { states_tested_data }
			} = await stateTestingAPI.get()
			setStateTestNumbers(states_tested_data)
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
			<Tested
				tested={IndiaTested}
				time={testUpdatedTime}
				region="India"
			/>
			<StateTable
				data={stateCases}
				districtData={districtCases}
				tested={stateTestNumbers}
			/>
		</div>
	)
}

export default IndiaTracker
