import React, { useEffect, useState, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import indiaAPI from '../../api/indiaAPI'
import Dashboard from '../Dashboard/Dashboard'
import Tested from '../layout/Tested'
import RatioChart from '../Charts/RatioChart'
import DailyCumulative from '../Charts/DailyCumulative'
import districtAPI from '../../api/districtAPI'
import moment from 'moment'
import DistrictTable from '../Tables/DistrictTable/DistrictTable'
// Redux
import { connect } from 'react-redux'

const StateTracker = ({ states, states: { loading } }) => {
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

	useEffect(() => {
		const fetchData = async () => {
			const {
				data: { statewise }
			} = await indiaAPI.get()
			const cases = statewise.find(state => state.statecode === statecode)
			setStatecases(cases)
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
					<div className='row w-100'>
						<div className='col-md-6'>
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
						</div>
						<div className='col-md-6'>
							<div data-aos='fade-right'>
								<DailyCumulative statecode={statecode} />
							</div>
						</div>
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

export default connect(mapStateToProps)(StateTracker)
