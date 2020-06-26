import React, { useState, Fragment, useEffect } from 'react'
import CanvasJSReact from './canvasjs.react'
import { CONFIRMED, RECOVERED, DECEASED, ACTIVE } from '../../utils/colors'
import { connect } from 'react-redux'
import { getEntireTimeline } from '../../actions/timeline'
import moment from 'moment'

var CanvasJSChart = CanvasJSReact.CanvasJSChart

const DailyCumulative = ({ statecode, getEntireTimeline, timeline }) => {
	const [isDaily, setIsDaily] = useState(true)
	const [totalData, setTotalData] = useState({})
	const [dailyData, setDailyData] = useState({})

	useEffect(() => {
		getEntireTimeline(statecode)
		generateData()
	}, [timeline])

	const generateData = () => {
		let dailyConfirmed = [],
			dailyRecovered = [],
			dailyDeceased = [],
			totalConfirmed = [],
			totalRecovered = [],
			dailyActive = [],
			totalActive = [],
			totalDeceased = []
		let arr = Object.entries(timeline)
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].delta) {
				dailyConfirmed.push({
					x: i + 1,
					y: arr[i][1].delta.confirmed || 0,
					label: moment(arr[i][0]).format('D MMM')
				})
				dailyActive.push({
					x: i + 1,
					y:
						(arr[i][1].delta.confirmed || 0) -
						(arr[i][1].delta.recovered || 0) -
						(arr[i][1].delta.deceased || 0)
					// label: arr[i][0]
				})

				dailyRecovered.push({
					x: i + 1,
					y: arr[i][1].delta.recovered || 0
					// label: arr[i][0]
				})
				dailyDeceased.push({
					x: i + 1,
					y: arr[i][1].delta.deceased || 0
					// label: arr[i][0]
				})
			}
			if (arr[i][1].total) {
				totalConfirmed.push({
					x: i + 1,
					y: arr[i][1].total.confirmed || 0,
					label: moment(arr[i][0]).format('D MMM')
				})
				totalActive.push({
					x: i + 1,
					y:
						(arr[i][1].total.confirmed || 0) -
						(arr[i][1].total.recovered || 0) -
						(arr[i][1].total.deceased || 0)
					// label: arr[i][0]
				})
				totalRecovered.push({
					x: i + 1,
					y: arr[i][1].total.recovered || 0
					// label: arr[i][0]
				})
				totalDeceased.push({
					x: i + 1,
					y: arr[i][1].total.deceased || 0
					// label: arr[i][0]
				})
			}
		}
		setDailyData({
			dailyConfirmed,
			dailyRecovered,
			dailyDeceased,
			dailyActive
		})
		setTotalData({
			totalConfirmed,
			totalRecovered,
			totalDeceased,
			totalActive
		})
	}

	const dailyOptions = {
		animationEnabled: true,
		animationDuration: 4000,
		title: {
			text: 'Daily',
			fontFamily: 'Quicksand',
			fontWeight: 600
		},
		exportEnabled: true,
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
				dataPoints: dailyData.dailyConfirmed
			},
			{
				type: 'spline',
				color: ACTIVE,
				axisYType: 'secondary',
				name: 'Active',
				showInLegend: true,
				markerSize: 0,
				dataPoints: dailyData.dailyActive
			},
			{
				type: 'spline',
				axisYType: 'secondary',
				color: RECOVERED,
				name: 'Recovered',
				showInLegend: true,
				markerSize: 0,
				dataPoints: dailyData.dailyRecovered
			},
			{
				type: 'spline',
				axisYType: 'secondary',
				color: DECEASED,
				name: 'Deceased',
				showInLegend: true,
				markerSize: 0,
				dataPoints: dailyData.dailyDeceased
			}
		]
	}

	const totalOptions = {
		...dailyOptions,
		title: {
			text: 'Cumulative',
			fontFamily: 'Quicksand',
			fontWeight: 600
		},
		data: [
			{
				type: 'spline',
				color: CONFIRMED,
				axisYType: 'secondary',
				name: 'Confirmed',
				showInLegend: true,
				markerSize: 0,
				dataPoints: totalData.totalConfirmed
			},
			{
				type: 'spline',
				color: ACTIVE,
				axisYType: 'secondary',
				name: 'Active',
				showInLegend: true,
				markerSize: 0,
				dataPoints: totalData.totalActive
			},
			{
				type: 'spline',
				axisYType: 'secondary',
				color: RECOVERED,
				name: 'Recovered',
				showInLegend: true,
				markerSize: 0,
				dataPoints: totalData.totalRecovered
			},
			{
				type: 'spline',
				axisYType: 'secondary',
				color: DECEASED,
				name: 'Deceased',
				showInLegend: true,
				markerSize: 0,
				dataPoints: totalData.totalDeceased
			}
		]
	}

	return (
		<div className='mt-2'>
			<Fragment>
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
					<CanvasJSChart options={totalOptions} />
				)}
			</Fragment>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		timeline: state.timeline.province.timeline
	}
}

export default connect(mapStateToProps, { getEntireTimeline })(DailyCumulative)
