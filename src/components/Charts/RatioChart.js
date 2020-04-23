import React, { Component } from 'react'
import CanvasJSReact from './canvasjs.react'

var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart

const RatioChart = ({ active, recovered, deaths, confirmed }) => {
	const activePercentage = ((active / confirmed) * 100).toFixed(2)
	const options = {
		animationEnabled: true,
		title: {
			text: 'Total cases'
		},
		subtitles: [
			{
				text: `${activePercentage}% Active`,
				verticalAlign: 'center',
				fontSize: 24,
				dockInsidePlotArea: true
			}
		],
		data: [
			{
				type: 'doughnut',
				showInLegend: true,
				indexLabel: '{name}: {y}',
				yValueFormatString: '#,###',
				dataPoints: [
					{ name: 'Active', y: active },
					{ name: 'Deaths', y: deaths },
					{ name: 'Recovered', y: recovered }
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
