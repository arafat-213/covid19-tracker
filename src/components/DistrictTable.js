import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import useDistrictCases from '../hooks/useDistrictCases'
import './DistrictTable.css'
const dailyCasesFormatter = (cell, row, rowIndex, formatData) => {
	let field = formatData.dataField
	const data = formatData.tableData
	const isUpdate = formatData.isUpdate
	if (data[rowIndex].delta[field] !== 0 && isUpdate)
		return (
			<span>
				{' '}
				{`[+${data[rowIndex].delta[field]}] ${data[rowIndex][field]}`}{' '}
			</span>
		)
	return <span> {`${data[rowIndex][field]}`} </span>
}

const DistrictTable = props => {
	const response = useDistrictCases()
	// const Arrdata = Object.entries(response)
	// console.log(Arrdata)
	let tableData = []
	var data = response.filter(obj => obj.state === props.state)
	if (data[0]) {
		tableData = data[0].districtData
		console.log('From comp', tableData)
	}

	const columns = [
		{
			dataField: 'district',
			text: 'District',
			sort: true,
			formatter: dailyCasesFormatter,
			formatExtraData: {
				tableData,
				dataField: 'district'
			}
		},
		{
			dataField: 'confirmed',
			text: 'Confirmed',
			sort: true,
			headerAlign: 'center',
			formatter: dailyCasesFormatter,
			formatExtraData: {
				tableData,
				dataField: 'confirmed',
				isUpdate: true
			},
			sortFunc: (a, b, order, dataField, rowA, rowB) => {
				if (order === 'asc') return a - b
				else return b - a
			}
		},
		{
			dataField: 'active',
			text: 'Active',
			sort: true,
			formatter: dailyCasesFormatter,
			formatExtraData: {
				tableData,
				dataField: 'active'
			}
		},
		{
			dataField: 'recovered',
			text: 'Recovered',
			sort: true,
			formatter: dailyCasesFormatter,
			formatExtraData: {
				tableData,
				dataField: 'recovered'
			}
		},
		{
			dataField: 'deceased',
			text: 'Deaths',
			sort: true,
			formatter: dailyCasesFormatter,
			formatExtraData: {
				tableData,
				dataField: 'deceased',
				isUpdate: true
			}
		}
	]

	return (
		<div>
			<BootstrapTable
				wrapperClasses="table-responsive"
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
