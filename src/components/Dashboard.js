import React from 'react'
import useCases from '../hooks/useCases'
import DashboardCard from './DashboardCard'

const Dashboard = () => {
	const {
		cases: {
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
					<div className="card">
						<DashboardCard
							className="four wide colum"
							card="confirmed"
							count={confirmed}
							dailyCount={deltaconfirmed}
						/>
					</div>
				</div>
				<div className="col-sm-3">
					<div className="card">
						<DashboardCard
							className="four wide colum"
							card="active"
							count={confirmed - deaths - recovered}
						/>
					</div>
				</div>

				<div className="col-sm-3">
					<div className="card">
						<DashboardCard
							className="four wide colum"
							card="recovered"
							count={recovered}
							dailyCount={deltarecovered}
						/>
					</div>
				</div>

				<div className="col-sm-3">
					<div className="card">
						<DashboardCard
							className="four wide colum"
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
		</div>
	)
}

export default Dashboard
