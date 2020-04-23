import React from 'react'
import './DashboardCard.css'
const renderDailyCount = dailyCount => {
	if (dailyCount)
		return <small className="ext-center">{`[+${dailyCount}]`}</small>
	return null
}
const DashboardCard = props => {
	return (
		<div className="text-center">
			<div className="card-body">
				<div className="card-title">
					<h2 className="text-center">{props.count + ''}</h2>
				</div>
				<p className="card-text text-center h4">
					{renderDailyCount(props.dailyCount)}
					<br />
				</p>
				<div className="card-text text-nowrap text-center">
					<p className="h5">Total {props.card}</p>
				</div>
			</div>
		</div>
	)
}

export default DashboardCard
