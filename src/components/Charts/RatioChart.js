import React from 'react'
import CanvasJSReact from './canvasjs.react'

var CanvasJSChart = CanvasJSReact.CanvasJSChart

const RatioChart = ({ active, recovered, deaths, confirmed, region }) => {
	const parsedActive = parseInt(active)
	const parsedRecovered = parseInt(recovered)
	const parsedDeaths = parseInt(deaths)
	const parsedConfirmed = parseInt(confirmed)
	const activePercentage = ((parsedActive / parsedConfirmed) * 100).toFixed(2)
	const recoveredPercentage = (
		(parsedRecovered / parsedConfirmed) *
		100
	).toFixed(2)
	const deathsPercentage = ((parsedDeaths / parsedConfirmed) * 100).toFixed(2)

	const options = {
		animationEnabled: true,
		title: {
			text: 'COVID-19 cases',
			fontFamily: 'Quicksand',
			fontWeight: 600
		},
		subtitles: [
			{
				text: `${region}`,
				verticalAlign: 'center',
				fontSize: 64,
				fontWeight: 700,
				fontFamily: 'Quicksand'
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

	if (region.length <= 7) options.subtitles[0].fontSize = 36
	else if (region.length > 7 && region.length < 12)
		options.subtitles[0].fontSize = 28
	else if (region.length > 12 && region.length < 16)
		options.subtitles[0].fontSize = 24
	else options.subtitles[0].fontSize = 18

	return (
		<div>
			<CanvasJSChart options={options} />
		</div>
	)
}

export default RatioChart
