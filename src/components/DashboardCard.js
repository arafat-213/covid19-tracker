import React from 'react'

const DashboardCard = props => {
	return (
		<div className="ui card">
			<div className="content">
				<p>{props.count + ''}</p>
			</div>
			<div className="desciption">
				<p>Total {props.card}</p>
			</div>
		</div>
	)
}

export default DashboardCard
