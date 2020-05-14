import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

const CurveChart = ({ cases }) => {
	const [totalconfirmed, setTotalconfirmed] = useState([])
	const [totalrecovered, setTotalrecovered] = useState([])
	const [totaldeceased, setTotaldeceased] = useState([])
	const [dates, setDates] = useState([])

	const options = {
		title: {
			display: true,
			text: 'COVID-19 cases',
			fontSize: 20
		},
		aspectRatio: 10,
		tooltips: {
			intersect: true
		}
	}

	useEffect(() => {
		setTotalconfirmed(cases.map(obj => Number.parseInt(obj.totalconfirmed)))
		setTotalrecovered(cases.map(obj => Number.parseInt(obj.totalrecovered)))
		setTotaldeceased(cases.map(obj => Number.parseInt(obj.totaldeceased)))
		setDates(cases.map(obj => obj.date))
	}, [cases])
	console.log('state', totalconfirmed)

	// const dataSet = [
	// 	{
	// 		data: cases.map(obj => obj.totalconfirmed),
	// 		label: 'Confirmed'
	// 	},
	// 	{
	// 		cases: cases.map(obj => obj.totalrecovered),
	// 		label: 'Recovered'
	// 	},
	// 	{
	// 		cases: cases.map(obj => obj.totaldeceased),
	// 		label: 'Deceased'
	// 	}
	// ]
	const myData = {
		labels: dates,
		datasets: [
			{
				label: 'Confirmed',
				fill: false,
				lineTension: 0,
				backgroundColor: 'rgba(246, 172, 21, 1)',
				borderColor: 'rgba(0,0,0,1)',
				borderWidth: 2,
				data: totalconfirmed
			},
			{
				label: 'Recovered',
				fill: false,
				lineTension: 0,
				backgroundColor: 'rgba(23, 176, 52, 1)',
				borderColor: 'rgba(0,0,0,1)',
				borderWidth: 2,
				data: cases.map(obj => obj.totalrecovered)
			},
			{
				label: 'Deceased',
				fill: false,
				lineTension: 0,
				backgroundColor: 'rgba(236, 73, 64, 1)',
				borderColor: 'rgba(0,0,0,1)',
				borderWidth: 2,
				data: cases.map(obj => obj.totaldeceased)
			}
		]
	}
	return (
		<div>
			<Line data={myData} options={options} height={100} width={100} />
		</div>
	)
}

export default CurveChart
