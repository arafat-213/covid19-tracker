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
									? confirmed.toLocaleString('en-IN')
									: 'Loading..'
							}
							dailyCount={
								deltaconfirmed
									? deltaconfirmed.toLocaleString('en-IN')
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
									? active.toLocaleString('en-IN')
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
									? recovered.toLocaleString('en-IN')
									: 'Loading..'
							}
							dailyCount={
								deltarecovered
									? deltarecovered.toLocaleString('en-IN')
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
									? deaths.toLocaleString('en-IN')
									: 'Loading..'
							}
							dailyCount={
								deltadeaths
									? deltadeaths.toLocaleString('en-IN')
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
