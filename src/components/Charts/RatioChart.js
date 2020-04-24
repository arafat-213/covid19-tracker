import React, { Component } from 'react'
import CanvasJSReact from './canvasjs.react'

var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart

const RatioChart = ({ active, recovered, deaths, confirmed }) => {
	const parsedActive = parseInt(active)
	const parsedRecovered = parseInt(recovered)
	const parsedDeaths = parseInt(deaths)
	const parsedConfirmed = parseInt(confirmed)

	const activePercentage = ((parsedActive / parsedConfirmed) * 100).toFixed(2)
	const recoveredPercentage = (
		(parsedRecovered / (parsedRecovered + parsedDeaths)) *
		100
	).toFixed(2)
	const deathsPercentage = (
		(parsedDeaths / (parsedRecovered + parsedDeaths)) *
		100
	).toFixed(2)

	const options = {
		animationEnabled: true,
		title: {
			text: 'Total cases'
		},
		subtitles: [
			{
				text: `Covid19-India`,
				verticalAlign: 'center',
				fontSize: 24,
				dockInsidePlotArea: true
			}
		],
		data: [
			{
				type: 'doughnut',
				showInLegend: true,
				indexLabel: `{name}: {y} ({z}%)`,
				yValueFormatString: '#,###',
				dataPoints: [
					{ name: 'Active', y: active, z: activePercentage },
					{ name: 'Deaths', y: deaths, z: deathsPercentage },
					{ name: 'Recovered', y: recovered, z: recoveredPercentage }
				]
			}
		]
	}

	return (
		<div>
			<CanvasJSChart options={options} />
		</div>
	)
}

export default RatioChart
