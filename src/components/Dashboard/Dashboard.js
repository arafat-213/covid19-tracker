import React from 'react'
import DashboardCard from '../Dashboard/DashboardCard'
import './DashboardCard.css'
import UpdateTime from '../layout/UpdateTime'
import { connect } from 'react-redux'
import moment from 'moment'

const Dashboard = ({ data: { total, delta = {}, meta = {} } }) => {
	// TODO: Pass the dashboard data from trackers as props

	// let data = region === 'India' ? india : global
	// Handles NaN and undefined values
	delta.confirmed = delta.confirmed || 0
	delta.recovered = delta.recovered || 0
	delta.deceased = delta.deceased || 0

	return (
		<div>
			<div className='row'>
				<div className='col-lg-3 col-sm-6'>
					<div
						className='card card-confirmed m-1 m-l-0'
						data-aos='fade-right'>
						<DashboardCard
							// className="four wide colum"
							card='Confirmed'
							count={parseInt(total.confirmed).toLocaleString(
								'en-IN'
							)}
							dailyCount={parseInt(
								delta.confirmed
							).toLocaleString('en-IN')}
						/>
					</div>
				</div>

				<div className='col-lg-3 col-sm-6'>
					<div
						className='card card-active  m-1  m-l-0'
						data-aos='fade-down'>
						<DashboardCard
							// className="four wide colum"
							card='Active'
							count={(
								total.confirmed -
								total.recovered -
								total.deceased
							).toLocaleString('en-IN')}
							dailyCount={(
								delta.confirmed -
								delta.recovered -
								delta.deceased
							).toLocaleString('en-IN')}
						/>
					</div>
				</div>

				<div className='col-lg-3 col-sm-6'>
					<div
						className='card card-recovered m-1 m-l-0'
						data-aos='fade-up'>
						<DashboardCard
							// className="four wide colum"
							card='Recovered'
							count={parseInt(total.recovered).toLocaleString(
								'en-IN'
							)}
							dailyCount={parseInt(
								delta.recovered
							).toLocaleString('en-IN')}
						/>
					</div>
				</div>

				<div className='col-lg-3 col-sm-6'>
					<div
						className='card card-deceased m-1 m-l-0'
						data-aos='fade-left'>
						<DashboardCard
							// className="four wide colum card-deceased"
							card='Deceased'
							count={parseInt(total.deceased).toLocaleString(
								'en-IN'
							)}
							dailyCount={parseInt(delta.deceased).toLocaleString(
								'en-IN'
							)}
						/>
					</div>
				</div>
			</div>
			<div style={{ marginTop: '4px' }} data-aos='fade-up-left'>
				<UpdateTime
					time={moment
						.duration(
							new moment().diff(new moment(meta.last_updated))
						)
						.humanize()}
				/>
				<br />
			</div>
			<div data-aos='zoom-in-up'></div>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {}
}

export default connect(mapStateToProps)(Dashboard)
