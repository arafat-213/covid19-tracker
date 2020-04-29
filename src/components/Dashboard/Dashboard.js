import React from 'react'
import DashboardCard from '../Dashboard/DashboardCard'
import './DashboardCard.css'
import RatioChart from '../Charts/RatioChart'
import UpdateTime from '../Messages/UpdateTime'

const Dashboard = ({ cases, time, region }) => {
	let active,
		confirmed,
		recovered,
		deaths,
		deltaconfirmed,
		deltarecovered,
		deltadeaths = 0
	if (region === 'Global') {
		;({
			TotalConfirmed: confirmed,
			TotalRecovered: recovered,
			TotalDeaths: deaths,
			NewConfirmed: deltaconfirmed,
			NewDeaths: deltadeaths,
			NewRecovered: deltarecovered
		} = cases)
		active = confirmed - recovered - deaths
	} else {
		;({
			active,
			confirmed,
			recovered,
			deaths,
			deltaconfirmed,
			deltarecovered,
			deltadeaths
		} = cases)
	}

	return (
		<div>
			<div className="row">
				<div className="col-sm-3">
					<div className="card card-confirmed" data-aos="fade-right">
						<DashboardCard
							className="four wide colum"
							card="Confirmed"
							count={
								confirmed
									? parseInt(confirmed).toLocaleString(
											'en-IN'
									  )
									: 'Loading..'
							}
							dailyCount={
								deltaconfirmed
									? parseInt(deltaconfirmed).toLocaleString(
											'en-IN'
									  )
									: 'Loading..'
							}
						/>
					</div>
				</div>

				<div className="col-sm-3">
					<div className="card card-active" data-aos="fade-down">
						<DashboardCard
							className="four wide colum"
							card="Active"
							count={
								active
									? parseInt(active).toLocaleString('en-IN')
									: 'Loading..'
							}
						/>
					</div>
				</div>

				<div className="col-sm-3">
					<div className="card card-recovered" data-aos="fade-up">
						<DashboardCard
							className="four wide colum"
							card="Recovered"
							count={
								recovered
									? parseInt(recovered).toLocaleString(
											'en-IN'
									  )
									: 'Loading..'
							}
							dailyCount={
								deltarecovered
									? parseInt(deltarecovered).toLocaleString(
											'en-IN'
									  )
									: 'Loading..'
							}
						/>
					</div>
				</div>

				<div className="col-sm-3 ">
					<div className="card card-deceased" data-aos="fade-left">
						<DashboardCard
							className="four wide colum card-deceased"
							card="Deceased"
							count={
								deaths
									? parseInt(deaths).toLocaleString('en-IN')
									: 'Loading..'
							}
							dailyCount={
								deltadeaths
									? parseInt(deltadeaths).toLocaleString(
											'en-IN'
									  )
									: 'Loading..'
							}
						/>
					</div>
				</div>
			</div>

			<div style={{ marginTop: '4px' }} data-aos="fade-up-left">
				<UpdateTime time={time} />
				<br />
			</div>
			<div data-aos="zoom-in-up">
				{/* <RatioChart
					recovered={recovered}
					deaths={deaths}
					active={active}
					confirmed={confirmed}
					state={region}
				/> */}
			</div>
		</div>
	)
}
export default Dashboard
