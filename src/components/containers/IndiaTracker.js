import React, { useEffect, useState, Fragment } from 'react'
import Dashboard from '../Dashboard/Dashboard'
import StateTable from '../Tables/StateTable/StateTable'
import indiaAPI from '../../api/indiaAPI'
import _ from 'lodash'
import districtData from '../../api/districtAPI'
import Tested from '../layout/Tested'
import stateTestingAPI from '../../api/stateTestingAPI'
import RatioChart from '../Charts/RatioChart'
import moment from 'moment'
import DailyCumulative from '../Charts/DailyCumulative'
import Notification from '../../components/layout/Notifications'
// Redux
import { connect } from 'react-redux'
import { getIndiaDashboard, getPastDashboard } from '../../actions/india'
import { getEntireTimeline, getStateTimeLine } from '../../actions/timeline'
import { getNotifications } from '../../actions/notification'
import LoadingPage from '../Pages/LoadingPage'
import StateTablev2 from '../Tables/StateTable/StateTablev2'

const IndiaTracker = ({
	getIndiaDashboard,
	getPastDashboard,
	getNotifications,
	dashboard,
	dashboard: { delta = {}, meta = {}, total = {} },
	loading
}) => {
	// const [IndiaCases, setIndiaCases] = useState([])
	// const [updateTimeStamp, setUpdateTimeStamp] = useState('')
	const [stateCases, setStateCases] = useState([])
	const [districtCases, setDistrictCases] = useState([])
	const [stateTestNumbers, setStateTestNumbers] = useState(0)
	// const [casesTimeline, setCasesTimeline] = useState([])
	const [expandNotifications, setExpandNotifications] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			getIndiaDashboard()
			getNotifications()
			const response = await indiaAPI.get()

			const { statewise } = response.data
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
			{loading ? (
				<LoadingPage />
			) : (
				<Fragment>
					<div className={`mx-auto `} style={{ width: '60px' }}>
						<i
							title='Latest notifications'
							onClick={() =>
								setExpandNotifications(!expandNotifications)
							}
							className={`far ${
								expandNotifications
									? 'fa-bell-slash'
									: 'fa-bell'
							} `}></i>
						<i
							style={{ color: '#C0C0C0' }}
							className='far fa-calendar-times mx-2'
							title='Dashboard for past dates, coming soon'>
							{' '}
						</i>
					</div>

					{expandNotifications && (
						<div data-aos='fade-up' data-aos-duration='750'>
							<Notification />
						</div>
					)}
					<Tested
						tested={total.tested}
						newTest={parseInt(delta.tested).toLocaleString('en-IN')}
						time={moment
							.duration(
								new moment().diff(
									new moment(meta.tested.last_updated)
								)
							)
							.humanize()}
						region='India'
						source={meta.tested['source']}
					/>
					<Dashboard
						// time={meta.last_updated}
						data={dashboard}
						region='India'
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
							region='India'
						/>
					</div>
					{/* <div>
						<IndiaLineChart
							cases={casesTimeline}
							category='confirmed'
						/>
					</div> */}
					<div>
						<DailyCumulative statecode={'TT'} />
					</div>

					<div>
						<StateTable
							data={stateCases}
							districtData={districtCases}
							tested={stateTestNumbers}
						/>
					</div>
					<div className='table-responsive'>
						<StateTablev2 />
					</div>
				</Fragment>
			)}
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		dashboard: state.india.dashboard,
		loading: state.india.loading
	}
}

export default connect(mapStateToProps, {
	getIndiaDashboard,
	getEntireTimeline,
	getStateTimeLine,
	getNotifications,
	getPastDashboard
})(IndiaTracker)
