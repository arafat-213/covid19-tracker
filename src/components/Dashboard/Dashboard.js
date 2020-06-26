import React from 'react'
import DashboardCard from '../Dashboard/DashboardCard'
import './DashboardCard.css'
import UpdateTime from '../layout/UpdateTime'
import moment from 'moment'

const Dashboard = ({ data: { total, delta = {}, meta = {} } }) => {
	// Handles NaN and undefined values
	delta.confirmed = delta.confirmed || 0
	delta.recovered = delta.recovered || 0
	delta.deceased = delta.deceased || 0
	total.deceased = total.deceased || 0
	return (
		<div>
			<div className='row'>
				<div className='col-lg-3 col-sm-6'>
					<div
						className='card card-confirmed m-1 m-l-0'
						data-aos='fade-right'>
						<DashboardCard
							card='Confirmed'
							count={total.confirmed}
							dailyCount={delta.confirmed}
						/>
					</div>
				</div>

				<div className='col-lg-3 col-sm-6'>
					<div
						className='card card-active  m-1  m-l-0'
						data-aos='fade-down'>
						<DashboardCard
							card='Active'
							count={
								total.confirmed -
								total.recovered -
								total.deceased
							}
							dailyCount={
								delta.confirmed -
								delta.recovered -
								delta.deceased
							}
						/>
					</div>
				</div>

				<div className='col-lg-3 col-sm-6'>
					<div
						className='card card-recovered m-1 m-l-0'
						data-aos='fade-up'>
						<DashboardCard
							card='Recovered'
							count={total.recovered}
							dailyCount={delta.recovered}
						/>
					</div>
				</div>

				<div className='col-lg-3 col-sm-6'>
					<div
						className='card card-deceased m-1 m-l-0'
						data-aos='fade-left'>
						<DashboardCard
							card='Deceased'
							count={total.deceased}
							dailyCount={delta.deceased}
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
		</div>
	)
}

export default Dashboard
