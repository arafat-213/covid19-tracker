import React from 'react'

const DashboardCard = props => {
	return (
		<div className="card-body">
			<div className="card-title">
				<h2 className="text-center">{props.count + ''}</h2>
			</div>
			<p class="card-text text-center">
				<small class="text-muted text-center">
					{props.dailyCount ? `[+${props.dailyCount}]` : ''}
				</small>
			</p>
			<div className="card-text text-nowrap text-center">
				<p>Total {props.card}</p>
			</div>
		</div>
	)
}

export default DashboardCard
