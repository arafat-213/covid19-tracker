import React, { useEffect, useState, Fragment } from 'react'
import Dashboard from '../Dashboard/Dashboard'
import StateTable from '../Tables/StateTable/StateTable'
import indiaAPI from '../../api/indiaAPI'
import _ from 'lodash'
import districtData from '../../api/districtAPI'
import Tested from '../layout/Tested'
import RatioChart from '../Charts/RatioChart'
import moment from 'moment'
import DailyCumulative from '../Charts/DailyCumulative'
import Notification from '../../components/layout/Notifications'
// Redux
import { connect } from 'react-redux'
import { getIndiaDashboard } from '../../actions/india'
import { getNotifications } from '../../actions/notification'
import LoadingPage from '../Pages/LoadingPage'

const IndiaTracker = ({
	getIndiaDashboard,
	// getPastDashboard,
	getNotifications,
	dashboard,
	dashboard: { delta = {}, meta = {}, total = {} },
	loading
}) => {
	const [stateCases, setStateCases] = useState([])
	const [districtCases, setDistrictCases] = useState([])
	const [expandNotifications, setExpandNotifications] = useState(false)
	const [pastDate, setPastDate] = useState(
		moment(new Date()).format('YYYY-MM-DD')
	)

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
		}
		fetchData()
	}, [])

	useEffect(() => {
		// getIndiaDashboard(pastDate)
	}, [pastDate])

	return (
		<div>
			{loading ? (
				<LoadingPage />
			) : (
				<Fragment>
					<div className={`mx-auto `} style={{ width: '15px' }}>
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
					</div>

					{/* <div>
							<label htmlFor='pastDate'>
								<i
									style={{ color: '#C0C0C0' }}
									className='far fa-calendar-times mx-2'
									title='Dashboard for past dates, coming soon'>
									{' '}
								</i>
							</label>
							<input
								type='date'
								id='pastDate'
								min='2020-04-30'
								max={moment(new Date()).format('YYYY-MM-DD')}
								name='pastDate'
								value={pastDate}
								onChange={e =>
									setPastDate(e.target.value)
								}></input>
						</div> */}

					{expandNotifications && (
						<div data-aos='fade-up' data-aos-duration='750'>
							<Notification />
						</div>
					)}
					<Tested
						tested={total.tested}
						newTest={delta.tested}
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
					<Dashboard data={dashboard} region='India' />
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
					<div data-aos='fade-right'>
						<DailyCumulative statecode={'TT'} />
					</div>

					<div>
						<StateTable
							data={stateCases}
							districtData={districtCases}
						/>
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
	getNotifications
	// getPastDashboard
})(IndiaTracker)
