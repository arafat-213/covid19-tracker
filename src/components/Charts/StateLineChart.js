import React, { useState } from 'react'
import CanvasJSReact from './canvasjs.react'
import { useEffect } from 'react'
import axios from 'axios'
import { CONFIRMED, RECOVERED, DECEASED } from '../../utils/colors'
var CanvasJSChart = CanvasJSReact.CanvasJSChart

const StateLineChart = ({ statecode, states_daily }) => {
	const [dailyConfirmed, setDailyConfirmed] = useState([])
	const [dailyRecovered, setDailyRecovered] = useState([])
	const [dailyDeceased, setDailyDeceased] = useState([])

	const [isDaily, setIsDaily] = useState(true)

	useEffect(() => {
		generateData()
	}, [states_daily])

	const generateData = async () => {
		// const res = await axios.get(
		// 	'https://api.covid19india.org/states_daily.json'
		// )
		// const { states_daily } = res.data

		let dailyConfirmedList = [],
			dailyRecoveredList = [],
			dailyDeceasedList = []

		// Daily new confirmed
		dailyConfirmedList = states_daily.filter(
			day => day.status === 'Confirmed'
		)

		// Daily new recovered
		dailyRecoveredList = states_daily.filter(
			day => day.status === 'Recovered'
		)

		// Daily new deceased
		dailyDeceasedList = states_daily.filter(
			day => day.status === 'Deceased'
		)

		let dailyConfirmedCases = [],
			dailyRecoveredCases = [],
			dailyDeceasedCases = []
		for (let i = 0; i < dailyConfirmedList.length; i++) {
			// Daily new confirmed
			dailyConfirmedCases.push({
				x: i + 1,
				y: Number.parseInt(dailyConfirmedList[i][statecode]),
				label: dailyConfirmedList[i].date
			})
			// Daily new recovered
			dailyRecoveredCases.push({
				x: i + 1,
				y: Number.parseInt(dailyRecoveredList[i][statecode]),
				label: dailyRecoveredList[i].date
			})
			// Daily new deceased
			dailyDeceasedCases.push({
				x: i + 1,
				y: Number.parseInt(dailyDeceasedList[i][statecode]),
				label: dailyDeceasedList[i].date
			})
		}
		setDailyConfirmed(dailyConfirmedCases)
		setDailyRecovered(dailyRecoveredCases)
		setDailyDeceased(dailyDeceasedCases)
	}

	const dailyOptions = {
		title: {
			text: 'Daily',
			fontFamily: 'Quicksand',
			fontWeight: 600
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor: 'pointer',
			verticalAlign: 'top',
			horizontalAlign: 'center',
			dockInsidePlotArea: true
		},
		data: [
			{
				type: 'spline',
				color: CONFIRMED,
				axisYType: 'secondary',
				name: 'Confirmed',
				showInLegend: true,
				markerSize: 0,
				dataPoints: dailyConfirmed
			},
			{
				type: 'spline',
				axisYType: 'secondary',
				color: RECOVERED,
				name: 'Recovered',
				showInLegend: true,
				markerSize: 0,
				dataPoints: dailyRecovered
			},
			{
				type: 'spline',
				axisYType: 'secondary',
				color: DECEASED,
				name: 'Deceased',
				showInLegend: true,
				markerSize: 0,
				dataPoints: dailyDeceased
			}
		]
	}

	return (
		<div>
			{isDaily ? (
				<CanvasJSChart options={dailyOptions} />
			) : (
				<CanvasJSChart />
			)}
		</div>
	)
}

export default StateLineChart
