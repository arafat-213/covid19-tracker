import React from 'react'

const renderDailyCount = dailyCount => {
	if (dailyCount)
		return (
			<small className="text-muted text-center">{`[+${dailyCount}]`}</small>
		)
	return null
}
const DashboardCard = props => {
	return (
		<div className="card text-center">
			<div className="card-body">
				<div className="card-title">
					<h2 className="text-center">{props.count + ''}</h2>
				</div>
				<p className="card-text text-center">
					{renderDailyCount(props.dailyCount)}
				</p>
				<div className="card-text text-nowrap text-center">
					<p>Total {props.card}</p>
				</div>
			</div>
		</div>
	)
}

export default DashboardCard
