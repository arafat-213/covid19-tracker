import React from 'react'
import './DashboardCard.css'
const renderDailyCount = dailyCount => {
	if (dailyCount) return <small>{`[+${dailyCount}]`}</small>
	return null
}
const DashboardCard = props => {
	return (
		<div className="text-center">
			<div className="card-body">
				<div className="card-title">
					<h2 className="text-center total-cases">
						{props.count + ''}
					</h2>
				</div>
				<p className="card-text text-center h4 daily-cases">
					{renderDailyCount(props.dailyCount)}
					<br />
				</p>

				<div className="card-text text-wrap text-center">
					<p className="h5 total-title">{props.card}</p>
				</div>
			</div>
		</div>
	)
}

export default DashboardCard
