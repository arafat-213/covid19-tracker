import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import useDistrictCases from '../hooks/useDistrictCases'

const columns = [
	{
		dataField: 'district',
		text: 'District',
		sort: true
	},
	{
		dataField: 'confirmed',
		text: 'Confirmed',
		sort: true
	},
	{
		dataField: 'active',
		text: 'Active',
		sort: true
	},
	{
		dataField: 'recovered',
		text: 'Recovered',
		sort: true
	},
	{
		dataField: 'deceased',
		text: 'Deaths',
		sort: true
	}
]

const DistrictTable = props => {
	const response = useDistrictCases()
	// const Arrdata = Object.entries(response)
	// console.log(Arrdata)
	let tableData = []
	var data = response.filter(obj => obj.state === props.state)
	if (data[0]) {
		tableData = data[0].districtData
		console.log('From comp', data[0].districtData)
	}

	return (
		<div>
			<BootstrapTable
				keyField="district"
				columns={columns}
				data={tableData}
				hover
				bootstrap4
				striped
				condensed
			/>
		</div>
	)
}

export default DistrictTable
