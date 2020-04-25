import React from 'react'
import DashboardCard from '../Dashboard/DashboardCard'
import './DashboardCard.css'
import RatioChart from '../Charts/RatioChart'
import UpdateTime from '../Messages/UpdateTime'

const Dashboard = ({ cases, time, region }) => {
	const option = [{ minimumIntegerDigits: 1 }]
	let active,
		confirmed,
		recovered,
		deaths,
		deltaconfirmed,
		deltarecovered,
		deltadeaths = 0
	if (region === 'India') {
		;({
			active,
			confirmed,
			recovered,
			deaths,
			deltaconfirmed,
			deltarecovered,
			deltadeaths
		} = cases)
	} else {
		;({
			TotalConfirmed: confirmed,
			TotalRecovered: recovered,
			TotalDeaths: deaths,
			NewConfirmed: deltaconfirmed,
			NewDeaths: deltadeaths,
			NewRecovered: deltarecovered
		} = cases)
		active = confirmed - recovered - deaths
	}

	return (
		<div>
			<div className="row">
				<div className="col-sm-3">
					<div className="card card-confirmed ">
						<DashboardCard
							className="four wide colum"
							card="Confirmed"
							count={
								confirmed
									? parseInt(confirmed).toLocaleString(
											'en-IN',
											option
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
					<div className="card card-active">
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
					<div className="card card-recovered">
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
					<div className="card card-deceased">
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

			<div style={{ marginTop: '4px' }}>
				<UpdateTime time={time} />
				<br />
			</div>
			<div>
				<RatioChart
					recovered={recovered}
					deaths={deaths}
					active={active}
					confirmed={confirmed}
					state={region}
				/>
			</div>
		</div>
	)
}
export default Dashboard
