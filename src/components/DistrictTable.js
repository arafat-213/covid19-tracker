import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import useDistrictCases from '../hooks/useDistrictCases'
import './DistrictTable.css'

const DistrictTable = props => {
	const response = useDistrictCases()
	let tableData = []
	var data = response.filter(obj => obj.state === props.state)
	if (data[0]) {
		tableData = data[0].districtData
		console.log('From comp', tableData)
	}

	const columns = [
		{
			dataField: 'district',
			text: 'District'
		},
		{
			dataField: 'delta.confirmed',
			isDummy: true,
			text: ' ',
			formatter: (cell, row) =>
				cell === 0 ? (
					<span></span>
				) : (
					<span style={{ color: 'grey' }}>{`+${cell}`}</span>
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
					<span style={{ color: 'red' }}>{`+${cell}`}</span>
				)
		},
		{
			text: 'Deaths',
			dataField: 'deceased',
			sort: true
		}
	]

	return (
		<div>
			<BootstrapTable
				wrapperClasses="table-responsive"
				keyField="district"
				// sort={{ dataField: 'district', order: 'desc' }}
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
