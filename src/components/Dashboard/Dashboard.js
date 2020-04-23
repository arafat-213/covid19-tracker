import React from 'react'
import useCases from '../../hooks/useCases'
import DashboardCard from '../Dashboard/DashboardCard'
import './DashboardCard.css'
import RecFatRate from '../RecFatRate'
import RatioChart from '../Charts/RatioChart'

const Dashboard = () => {
	const {
		cases: {
			active,
			confirmed,
			deaths,
			recovered,
			deltaconfirmed,
			deltadeaths,
			deltarecovered
		},
		updateTimeStamp
	} = useCases()

	return (
		<div>
			<div className="row">
				<div className="col-sm-3">
					<div className="card card-confirmed ">
						<DashboardCard
							className="four wide colum"
							card="confirmed"
							count={confirmed}
							dailyCount={deltaconfirmed}
						/>
					</div>
				</div>

				<div className="col-sm-3">
					<div className="card card-active">
						<DashboardCard
							className="four wide colum"
							card="active"
							count={active}
						/>
					</div>
				</div>

				<div className="col-sm-3">
					<div className="card card-recovered">
						<DashboardCard
							className="four wide colum"
							card="recovered"
							count={recovered}
							dailyCount={deltarecovered}
						/>
					</div>
				</div>

				<div className="col-sm-3 ">
					<div className="card card-deceased">
						<DashboardCard
							className="four wide colum card-deceased"
							card="deceased"
							count={deaths}
							dailyCount={deltadeaths}
						/>
					</div>
				</div>
			</div>
			<h6
				style={{ marginTop: '8px' }}
				className="float-right">{`*Last updated at ${updateTimeStamp}`}</h6>
			<br />
			<RecFatRate recovered={recovered} deaths={deaths} />
			<RatioChart
				recovered={recovered}
				deaths={deaths}
				active={active}
				confirmed={confirmed}
			/>
		</div>
	)
}

export default Dashboard
