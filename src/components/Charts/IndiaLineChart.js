import React from 'react'
import CanvasJSReact from './canvasjs.react'
import { useState } from 'react'
import { useEffect } from 'react'
import { CONFIRMED, RECOVERED, DECEASED } from '../../utils/colors'
var CanvasJSChart = CanvasJSReact.CanvasJSChart

const IndiaLineChart = ({ cases }) => {
	const [dailyConfirmed, setDailyConfirmed] = useState([])
	const [dailyRecovered, setDailyRecovered] = useState([])
	const [dailyDeceased, setDailyDeceased] = useState([])

	const [totalConfirmed, setTotalConfirmed] = useState([])
	const [totalRecovered, setTotalRecovered] = useState([])
	const [totalDeceased, setTotalDeceased] = useState([])

	const [isDaily, setIsDaily] = useState(true)

	useEffect(() => {
		generateData()
		// generateRecovered()
	}, [cases])

	const generateData = () => {
		let dailyConfirmedList = [],
			dailyRecoveredList = [],
			dailyDeceasedList = [],
			totalConfirmedList = [],
			totalRecoveredList = [],
			totalDeceasedList = []
		for (let index = 0; index < cases.length; index++) {
			// Daily new confirmed
			dailyConfirmedList.push({
				x: index + 1,
				y: Number.parseInt(cases[index].dailyconfirmed),
				label: cases[index].date
			})
			// Daily new recovered
			dailyRecoveredList.push({
				x: index + 1,
				y: Number.parseInt(cases[index].dailyrecovered),
				label: cases[index].date
			})
			// Daily new deceased
			dailyDeceasedList.push({
				x: index + 1,
				y: Number.parseInt(cases[index].dailydeceased),
				label: cases[index].date
			})
			// Total confirmed
			totalConfirmedList.push({
				x: index + 1,
				y: Number.parseInt(cases[index].totalconfirmed),
				label: cases[index].date
			})
			// Total recovered
			totalRecoveredList.push({
				x: index + 1,
				y: Number.parseInt(cases[index].totalrecovered),
				label: cases[index].date
			})
			// Total deceased
			totalDeceasedList.push({
				x: index + 1,
				y: Number.parseInt(cases[index].totaldeceased),
				label: cases[index].date
			})

			setDailyConfirmed(dailyConfirmedList)
			setDailyRecovered(dailyRecoveredList)
			setDailyDeceased(dailyDeceasedList)
			setTotalConfirmed(totalConfirmedList)
			setTotalRecovered(totalRecoveredList)
			setTotalDeceased(totalDeceasedList)
		}
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

	const cumulativeOption = {
		title: {
			text: 'Cumulative',
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
				dataPoints: totalConfirmed
			},
			{
				type: 'spline',
				axisYType: 'secondary',
				color: RECOVERED,
				name: 'Recovered',
				showInLegend: true,
				markerSize: 0,
				dataPoints: totalRecovered
			},
			{
				type: 'spline',
				axisYType: 'secondary',
				color: DECEASED,
				name: 'Deceased',
				showInLegend: true,
				markerSize: 0,
				dataPoints: totalDeceased
			}
		]
	}
	return (
		<div className='mt-2'>
			<div className='mx-auto' style={{ width: '175px' }}>
				<button
					className='btn btn-outline-secondary'
					onClick={e => setIsDaily(true)}>
					Daily
				</button>
				<button
					className='btn btn-outline-secondary'
					onClick={e => setIsDaily(false)}>
					Cumulative
				</button>
			</div>

			{isDaily ? (
				<CanvasJSChart options={dailyOptions} />
			) : (
				<CanvasJSChart options={cumulativeOption} />
			)}
		</div>
	)
}

export default IndiaLineChart
