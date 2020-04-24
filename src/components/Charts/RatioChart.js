import React from 'react'
import CanvasJSReact from './canvasjs.react'

var CanvasJSChart = CanvasJSReact.CanvasJSChart

const RatioChart = ({ active, recovered, deaths, confirmed, state }) => {
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
			text: 'COVID-19 cases'
		},
		subtitles: [
			{
				text: `${state}`,
				verticalAlign: 'center',
				fontSize: 24
				// dockInsidePlotArea: true
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

	options.subtitles[0].fontSize =
		state.length > 12 && state.length < 16 ? 18 : 24
	options.subtitles[0].fontSize = state.length > 16 ? 14 : 24

	return (
		<div>
			<CanvasJSChart options={options} />
		</div>
	)
}

export default RatioChart
