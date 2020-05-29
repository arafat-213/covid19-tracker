import React from 'react'
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
	const [chartData, setChartData] = useState([])
	const [chartType, setchartType] = useState('Initializing...')
	const [data, setData] = useState({
		labels: ['loading...'],
		datasets: [
			{
				data: [10, 20, 30, 40, 50, 25, 32]
			}
		]
	})
	let casedata = cases.map(obj => Number.parseInt(obj.totalconfirmed))
	console.log('outside hoook', casedata)
	let dateData = cases.map(obj => obj.date)
	useEffect(() => {
		setChartData(cases.map(obj => Number.parseInt(obj.totalconfirmed)))

		setchartType(label)
		setData({
			labels: dateData,
			datasets: [
				{
					label: chartType,
					backgroundColor: ACTIVE,
					borderColor: 'rgba(0,0,0,1)',
					borderWidth: 0.1,
					data: casedata
				}
			]
		})
		console.log('hook called', chartData)
	}, [cases, label])

	return <Bar data={data} options={options} />
}

export default DailyConfirmed
