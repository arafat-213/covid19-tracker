import React from 'react'
import useCases from '../hooks/useCases'
import DashboardCard from './DashboardCard'

const Dashboard = () => {
	const {
		cases: { totalconfirmed, totaldeceased, totalrecovered },
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
							count={totalconfirmed}
						/>
					</div>
				</div>
				<div className="col-sm-3">
					<div className="card">
						<DashboardCard
							className="four wide colum"
							card="active"
							count={
								totalconfirmed - totaldeceased - totalrecovered
							}
						/>
					</div>
				</div>

				<div className="col-sm-3">
					<div className="card">
						<DashboardCard
							className="four wide colum"
							card="deceased"
							count={totaldeceased}
						/>
					</div>
				</div>

				<div className="col-sm-3">
					<div className="card">
						<DashboardCard
							className="four wide colum"
							card="recovered"
							count={totalrecovered}
						/>
					</div>
				</div>
			</div>
			<h6 className="float-right">{`*Last updated at ${updateTimeStamp}`}</h6>
		</div>
	)
}

export default Dashboard
