import React from 'react'
import useCases from '../hooks/useCases'
import DashboardCard from './DashboardCard'

const Dashboard = () => {
	const { totalconfirmed, totaldeceased, totalrecovered } = useCases() || 0

	return (
		<div className="ui grid container">
			<DashboardCard
				className="four wide colum"
				card="confirmed"
				count={totalconfirmed}
			/>
			<DashboardCard
				className="four wide colum"
				card="active"
				count={totalconfirmed - totaldeceased - totalrecovered}
			/>
			<DashboardCard
				className="four wide colum"
				card="deceased"
				count={totaldeceased}
			/>
			<DashboardCard
				className="four wide colum"
				card="recovered"
				count={totalrecovered}
			/>
		</div>
	)
}

export default Dashboard
