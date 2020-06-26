import React from 'react'
import './DashboardCard.css'
import CountUp from 'react-countup'
const renderDailyCount = dailyCount => {
	if (parseInt(dailyCount) === 0) return null
	return parseInt(dailyCount) > 0 ? (
		<small>{`[+${dailyCount.toLocaleString('en-IN')}]`}</small>
	) : (
		<small>{`[${dailyCount.toLocaleString('en-IN')}]`}</small>
	)
}
const DashboardCard = props => {
	return (
		<div className='text-center'>
			<div className='card-body'>
				<div className='card-title'>
					<h2 className='text-center total-cases'>
						{parseInt(props.count).toLocaleString('en-IN')}
					</h2>
				</div>
				<p className='card-text text-center h4 daily-cases'>
					{renderDailyCount(props.dailyCount)}
					<br />
				</p>

				<div className='card-text text-wrap text-center'>
					<p className='h5 total-title'>{props.card}</p>
				</div>
			</div>
		</div>
	)
}

export default DashboardCard
