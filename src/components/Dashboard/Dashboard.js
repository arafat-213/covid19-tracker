import React from 'react'
import useCases from '../../hooks/useCases'
import DashboardCard from '../Dashboard/DashboardCard'
import './DashboardCard.css'
import RatioChart from '../Charts/RatioChart'
import UpdateTime from '../Messages/UpdateTime'

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
							card="Confirmed"
							count={confirmed}
							dailyCount={deltaconfirmed}
						/>
					</div>
				</div>

				<div className="col-sm-3">
					<div className="card card-active">
						<DashboardCard
							className="four wide colum"
							card="Active"
							count={active}
						/>
					</div>
				</div>

				<div className="col-sm-3">
					<div className="card card-recovered">
						<DashboardCard
							className="four wide colum"
							card="Recovered"
							count={recovered}
							dailyCount={deltarecovered}
						/>
					</div>
				</div>

				<div className="col-sm-3 ">
					<div className="card card-deceased">
						<DashboardCard
							className="four wide colum card-deceased"
							card="Deceased"
							count={deaths}
							dailyCount={deltadeaths}
						/>
					</div>
				</div>
			</div>

			<div style={{ marginTop: '4px' }}>
				<UpdateTime time={updateTimeStamp} />
				<br />
			</div>
			<div>
				<RatioChart
					recovered={recovered}
					deaths={deaths}
					active={active}
					confirmed={confirmed}
					state="India"
				/>
			</div>
		</div>
	)
}

export default Dashboard
