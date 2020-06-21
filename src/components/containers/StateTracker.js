import React, { useEffect, useState, Fragment } from 'react'
import { useParams, withRouter } from 'react-router-dom'
import indiaAPI from '../../api/indiaAPI'
import Dashboard from '../Dashboard/Dashboard'
import Tested from '../layout/Tested'
import RatioChart from '../Charts/RatioChart'
import StateLineChart from '../Charts/StateLineChart'
import districtAPI from '../../api/districtAPI'
import moment from 'moment'
import axios from 'axios'
import DistrictTable from '../Tables/DistrictTable/DistrictTable'
// import DailyCumulative from '../Charts/DailyCumulative'
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
	const [districtCases, setDistrictCases] = useState([])
	const [region, setRegion] = useState(null)
	const [stateDaily, setStateDaily] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			await getIndiaDashboard()

			const {
				data: { statewise }
			} = await indiaAPI.get()
			const cases = statewise.find(state => state.statecode === statecode)
			setStatecases(cases)
			setRegion(cases.state)

			// Fetching district cases
			const { data } = await districtAPI.get()
			setDistrictCases(data)

			// State timeline
			const res = await axios.get(
				'https://api.covid19india.org/states_daily.json'
			)
			const { states_daily } = res.data
			setStateDaily(states_daily)
		}
		fetchData()
	}, [statecode])
	return (
		<div>
			{!loading && (
				<Fragment>
					<Tested
						tested={total.tested ? total.tested : 'N.A.'}
						newTest={delta.tested}
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
					<Dashboard
						region={region ? region : 'India'}
						data={dashboard}
						time={meta.last_updated}
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
						<StateLineChart
							statecode={statecode.toLowerCase()}
							states_daily={stateDaily}
						/>
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
		// dashboard: state.india.states[this.statecode]
	}
}

export default connect(mapStateToProps, { getIndiaDashboard })(StateTracker)
