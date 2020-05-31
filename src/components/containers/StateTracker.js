import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import indiaAPI from '../../api/indiaAPI'
import Dashboard from '../Dashboard/Dashboard'
import Tested from '../layout/Tested'
import stateTestingAPI from '../../api/stateTestingAPI'
import RatioChart from '../Charts/RatioChart'
import districtAPI from '../../api/districtAPI'
import _ from 'lodash'
import DistrictTable from '../Tables/DistrictTable/DistrictTable'

const StateTracker = () => {
	let { id: statecode } = useParams()
	const [statecases, setStatecases] = useState([])
	const [updatedTimeStamp, setUpdatedTimeStamp] = useState('')
	const [districtCases, setDistrictCases] = useState([])
	const [region, setRegion] = useState(null)
	const [tested, setTested] = useState(0)

	useEffect(() => {
		const fetchData = async () => {
			const {
				data: { statewise }
			} = await indiaAPI.get()
			const cases = statewise.find(state => state.statecode === statecode)
			setStatecases(cases)
			setUpdatedTimeStamp(cases.lastupdatedtime)
			setRegion(cases.state)

			// Fetching district cases
			const { data } = await districtAPI.get()
			setDistrictCases(data)

			//Fetching state test numbers
			const {
				data: { states_tested_data }
			} = await stateTestingAPI.get()
			setTested(states_tested_data)
		}
		fetchData()
	}, [statecode])
	return (
		<div>
			{getTestNumber(tested, region)}
			<Dashboard
				region={region ? region : 'India'}
				cases={statecases}
				time={updatedTimeStamp}
			/>
			<div data-aos='zoom-in-up'>
				<RatioChart
					recovered={statecases.recovered}
					deaths={statecases.deaths}
					active={statecases.active}
					confirmed={statecases.confirmed}
					region={region ? region : 'Loading..'}
				/>
			</div>

			<DistrictTable row={statecases} data={districtCases} />
		</div>
	)
}

const getTestNumber = (tested, region) => {
	let index = _.findLastIndex(tested, ['state', region])
	let totaltested = 0,
		updatedon = '',
		source = ''
	if (tested && index !== -1) {
		totaltested = tested[index].totaltested
		if (!totaltested) {
			totaltested = tested[index - 1].totaltested
			updatedon = tested[index - 1].updatedon
			source = tested[index - 1].source
		} else {
			updatedon = tested[index].updatedon
			source = tested[index].source
		}
		return (
			<Tested
				tested={totaltested ? totaltested : 'Loading..'}
				time={updatedon}
				region={region}
				source={source}
			/>
		)
	}
}
export default StateTracker