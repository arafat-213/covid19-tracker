import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { useState } from 'react'
import { useEffect } from 'react'
import { ACTIVE, RECOVERED, DECEASED } from '../../utils/colors'

const options = {
	title: {
		display: true,
		text: 'COVID-19 cases',
		fontSize: 20
	},
	maintainAspectRatio: false,
	cutoutPercentage: 70,
	animation: {
		animateRotate: true,
		animateScale: true
	},
	legend: {
		display: true,
		labels: {
			fontSize: 18
		}
	}
}

const RChart = ({ active, recovered, deaths }) => {
	const [data, setData] = useState({
		labels: ['active', 'recovered', 'deceased'],
		datasets: [
			{
				data: [0, 0, 0]
			}
		]
	})
	const parsedActive = parseInt(active)
	const parsedRecovered = parseInt(recovered)
	const parsedDeaths = parseInt(deaths)
	useEffect(() => {
		setData({
			labels: ['active', 'deceased', 'recovered'],
			datasets: [
				{
					data: [parsedActive, parsedDeaths, parsedRecovered],
					backgroundColor: [ACTIVE, DECEASED, RECOVERED]
				}
			]
		})
	}, [parsedDeaths, parsedRecovered, parsedActive])

	return <Doughnut data={data} options={options} />
}

export default RChart
