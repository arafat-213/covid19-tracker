import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import useDistrictCases from '../../../hooks/useDistrictCases'
import RatioChart from '../../Charts/RatioChart'
import './DistrictTable.css'
import UpdateTime from '../../Messages/UpdateTime'

const columns = [
	{
		dataField: 'district',
		text: 'District',
		sort: true,
		classes: 'district-text'
	},
	{
		dataField: 'delta.confirmed',
		isDummy: true,
		text: '',
		formatter: (cell, row) =>
			cell === 0 ? (
				<span></span>
			) : (
				<span className="float-right daily-confirmed">{`+${cell}`}</span>
			)
	},
	{
		text: 'Confirmed',
		dataField: 'confirmed',
		sort: true
	},
	{
		text: 'Active',
		dataField: 'active',
		sort: true
	},
	{
		dataField: 'delta.recovered',
		isDummy: true,
		text: '',
		formatter: (cell, row) =>
			cell === 0 ? (
				<span></span>
			) : (
				<span className="float-right daily-recovered">
					&#8673;{`${cell}`}
				</span>
			)
	},
	{
		text: 'Recovered',
		dataField: 'recovered',
		sort: true
	},
	{
		dataField: 'delta.deceased',
		isDummy: true,
		text: '',
		formatter: (cell, row) =>
			cell === 0 ? (
				<span></span>
			) : (
				<span
					className="float-right"
					style={{ color: 'red' }}>{`+${cell}`}</span>
			)
	},
	{
		text: 'Deaths',
		dataField: 'deceased',
		sort: true
	}
]

const DistrictTable = ({
	row: { state, lastupdatedtime, recovered, deaths, active, confirmed }
}) => {
	const response = useDistrictCases()
	let tableData = []
	var data = response.filter(obj => obj.state === state)
	if (data[0]) {
		tableData = data[0].districtData
		console.log('From comp', tableData)
	}

	return (
		<div>
			<RatioChart
				recovered={recovered}
				deaths={deaths}
				active={active}
				confirmed={confirmed}
				state={state}
			/>
			<UpdateTime style={{ marginTop: '2px' }} time={lastupdatedtime} />
			<BootstrapTable
				wrapperClasses="table-responsive"
				headerClasses="thead-dark"
				keyField="district"
				columns={columns}
				data={tableData}
				hover
				bootstrap4
				condensed
			/>
		</div>
	)
}

export default DistrictTable
