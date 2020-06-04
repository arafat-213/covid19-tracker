import React from 'react'
import DashboardCard from '../Dashboard/DashboardCard'
import './DashboardCard.css'
import UpdateTime from '../layout/UpdateTime'
import { connect } from 'react-redux'

const Dashboard = ({ india, global, time, region }) => {
	let data = region === 'India' ? india : global
	const { delta, total, loading } = data
	console.log(data)

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
							count={
								!loading
									? parseInt(total.confirmed).toLocaleString(
											'en-IN'
									  )
									: 'Loading..'
							}
							dailyCount={
								!loading && delta.confirmed
									? parseInt(delta.confirmed).toLocaleString(
											'en-IN'
									  )
									: 'Loading..'
							}
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
							count={
								!loading
									? (
											total.confirmed -
											total.recovered -
											total.deceased
									  ).toLocaleString('en-IN')
									: 'Loading..'
							}
							dailyCount={
								!loading
									? (
											delta.confirmed -
											delta.recovered -
											delta.deceased
									  ).toLocaleString('en-IN')
									: 'Loading..'
							}
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
							count={
								!loading
									? parseInt(total.recovered).toLocaleString(
											'en-IN'
									  )
									: 'Loading..'
							}
							dailyCount={
								!loading
									? parseInt(delta.recovered).toLocaleString(
											'en-IN'
									  )
									: 'Loading..'
							}
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
							count={
								!loading
									? parseInt(total.deceased).toLocaleString(
											'en-IN'
									  )
									: 'Loading..'
							}
							dailyCount={
								!loading
									? parseInt(delta.deceased).toLocaleString(
											'en-IN'
									  )
									: 'Loading..'
							}
						/>
					</div>
				</div>
			</div>

			<div style={{ marginTop: '4px' }} data-aos='fade-up-left'>
				<UpdateTime time={time} />
				<br />
			</div>
			<div data-aos='zoom-in-up'></div>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		india: state.india.dashboard,
		global: state.global.dashboard
	}
}

export default connect(mapStateToProps)(Dashboard)
