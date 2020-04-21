import React from 'react'

const DashboardCard = props => {
	return (
		<div className="card-body">
			<div className="card-title">
				<h2>{props.count + ''}</h2>
			</div>
			<div className="card-text">
				<p>Total {props.card}</p>
			</div>
		</div>
	)
}

export default DashboardCard
