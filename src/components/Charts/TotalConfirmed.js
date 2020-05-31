import React, { Fragment } from 'react'
import { Bar } from 'react-chartjs-2'
import { useState, useEffect } from 'react'
import { ACTIVE } from '../../utils/colors'

const options = {
	title: {
		display: true,
		text: 'COVID-19 cases',
		fontSize: 20
	},
	maintainAspectRatio: false
}
const DailyConfirmed = ({ cases, label }) => {
	let casedata = cases.map(obj => Number.parseInt(obj.totalconfirmed))
	let dateData = cases.map(obj => obj.date)
	const [chartData, setChartData] = useState([])
	const [labels, setLabels] = useState([])
	const [days, setDays] = useState(0)
	const [chartType, setchartType] = useState('Initializing...')
	const [data, setData] = useState({
		labels: dateData.slice(-30),
		datasets: [
			{
				label: chartType,
				backgroundColor: ACTIVE,
				borderColor: 'rgba(0,0,0,1)',
				borderWidth: 0.1,
				data: casedata.slice(-30)
			}
		]
	})
	useEffect(() => {
		setChartData(casedata.slice(days))
		setLabels(dateData.slice(days))
		console.log(days, 'days ', chartData)
		setchartType(label)
		setData({
			labels: labels,
			datasets: [
				{
					label: chartType,
					backgroundColor: ACTIVE,
					borderColor: 'rgba(0,0,0,1)',
					borderWidth: 0.1,
					data: chartData
				}
			]
		})
	}, [cases, label, days])

	return (
		<div style={{ height: '380px' }}>
			<button className='btn' onClick={() => setDays(-14)}>
				14 days
			</button>
			<button className='btn' onClick={() => setDays(-30)}>
				1 Month
			</button>
			<button className='btn' onClick={() => setDays(-60)}>
				2 Months
			</button>
			<Bar data={data} options={options} />
		</div>
	)
}

export default DailyConfirmed
