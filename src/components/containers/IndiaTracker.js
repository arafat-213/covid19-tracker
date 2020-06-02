import React, { useEffect, useState } from 'react'
import Dashboard from '../Dashboard/Dashboard'
import StateTable from '../Tables/StateTable/StateTable'
import indiaAPI from '../../api/indiaAPI'
import _ from 'lodash'
import districtData from '../../api/districtAPI'
import Tested from '../layout/Tested'
import stateTestingAPI from '../../api/stateTestingAPI'
import RatioChart from '../Charts/RatioChart'
import LineChart from '../Charts/LineChart'
// import CurveChart from '../Charts/CurveChart'
// import RChart from '../Charts/RChart'
// import TotalConfirmed from '../Charts/TotalConfirmed'

const IndiaTracker = () => {
	const [IndiaCases, setIndiaCases] = useState([])
	const [updateTimeStamp, setUpdateTimeStamp] = useState('')
	const [region, setRegion] = useState('India')
	const [stateCases, setStateCases] = useState([])
	const [districtCases, setDistrictCases] = useState([])
	const [IndiaTested, setIndiaTested] = useState(0)
	const [testUpdatedTime, setTestUpdatedTime] = useState()
	const [stateTestNumbers, setStateTestNumbers] = useState(0)
	const [TestedSource, setTestedSource] = useState('')
	const [casesTimeline, setCasesTimeline] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await indiaAPI.get()
			setIndiaCases(response.data.statewise[0])
			setCasesTimeline(response.data.cases_time_series)

			setUpdateTimeStamp(response.data.statewise[0].lastupdatedtime)
			setRegion('India')

			const { statewise, tested } = response.data
			setIndiaTested(tested[tested.length - 1].totalsamplestested)
			setTestUpdatedTime(tested[tested.length - 1].updatetimestamp)
			setTestedSource(tested[tested.length - 1].source)
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
		fetchData()
	}, [])

	return (
		<div>
			<Tested
				tested={IndiaTested}
				time={testUpdatedTime}
				region='India'
				source={TestedSource}
			/>
			<Dashboard
				cases={IndiaCases}
				time={updateTimeStamp}
				region={region}
			/>
			<div data-aos='zoom-in-up'>
				<RatioChart
					recovered={IndiaCases.recovered}
					deaths={IndiaCases.deaths}
					active={IndiaCases.active}
					confirmed={IndiaCases.confirmed}
					region='India'
				/>
			</div>
			<div>
				<LineChart cases={casesTimeline} category='confirmed' />
			</div>
			{/* <div style={{ height: '400px' }}>
				<RChart
					recovered={IndiaCases.recovered}
					deaths={IndiaCases.deaths}
					active={IndiaCases.active}
					confirmed={IndiaCases.confirmed}
					region='India'
				/>
			</div> */}
			<div>
				<StateTable
					data={stateCases}
					districtData={districtCases}
					tested={stateTestNumbers}
				/>
			</div>
			{/* <div style={{ height: '400px' }}>
				<TotalConfirmed cases={casesTimeline} label='confirmed' />
			</div> */}
		</div>
	)
}

export default IndiaTracker
