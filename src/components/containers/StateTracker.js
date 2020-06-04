import React, { useEffect, useState, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import indiaAPI from '../../api/indiaAPI'
import Dashboard from '../Dashboard/Dashboard'
import Tested from '../layout/Tested'
import stateTestingAPI from '../../api/stateTestingAPI'
import RatioChart from '../Charts/RatioChart'
import StateLineChart from '../Charts/StateLineChart'
import districtAPI from '../../api/districtAPI'
import _ from 'lodash'
import moment from 'moment'
import DistrictTable from '../Tables/DistrictTable/DistrictTable'
// Redux
import { connect } from 'react-redux'
import { getIndiaDashboard } from '../../actions/india'

const StateTracker = ({ states, states: { loading }, getIndiaDashboard }) => {
	let { id: statecode } = useParams()

	const dashboard = states[statecode]
	const {
		total = {},
		delta = {},
		meta = {},
		meta: { tested = {} }
	} = dashboard
	const [statecases, setStatecases] = useState([])
	const [updatedTimeStamp, setUpdatedTimeStamp] = useState('')
	const [districtCases, setDistrictCases] = useState([])
	const [region, setRegion] = useState(null)
	// const [tested, setTested] = useState(0)

	useEffect(() => {
		const fetchData = async () => {
			// getIndiaDashboard()

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
		}
		fetchData()
	}, [statecode])
	return (
		<div>
			{!loading && (
				<Fragment>
					<Tested
						tested={total.tested ? total.tested : 'N.A.'}
						time={moment
							.duration(
								new moment(tested.last_updated).diff(
									new moment()
								)
							)
							.humanize()}
						region={region}
						source={tested.source}
					/>
					{/* {getTestNumber(tested, region)} */}

					<Dashboard
						region={region ? region : 'India'}
						data={dashboard}
						time={updatedTimeStamp}
					/>
					<div data-aos='zoom-in-up'>
						<RatioChart
							recovered={total.recovered}
							deaths={total.deceased}
							active={
								total.confirmed -
								total.recovered -
								total.deceased
							}
							confirmed={total.confirmed}
							region={region ? region : 'Loading..'}
						/>
					</div>

					<div>
						<StateLineChart statecode={statecode.toLowerCase()} />
					</div>

					<DistrictTable row={statecases} data={districtCases} />
				</Fragment>
			)}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		states: state.india.states
	}
}

export default connect(mapStateToProps, { getIndiaDashboard })(StateTracker)
