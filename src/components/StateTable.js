import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'

const data = [
	{
		id: '1',
		state: 'Maharashtra',
		confirmed: 4666,
		active: 3862,
		recovered: 572,
		deaths: 232
	},
	{
		id: '2',
		state: 'Gujarat',
		confirmed: 2066,
		active: 1858,
		recovered: 131,
		deaths: 77
	},
	{
		id: '3',
		state: 'Delhi',
		confirmed: 2081,
		active: 1603,
		recovered: 431,
		deaths: 47
	},
	{
		id: '4',
		state: 'Rajasthan',
		confirmed: 1659,
		active: 1404,
		recovered: 230,
		deaths: 25
	}
]

const columns = [
	{
		dataField: 'state',
		text: 'State/UT'
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
		dataField: 'deaths',
		text: 'Deaths',
		sort: true
	}
]

const options = [
	{
		dataField: 'price',
		order: 'desc'
	}
]

const expandRow = {
	renderer: (row, rowIndex) => (
		<div>
			<p>{`This Expand row is belong to rowKey ${row.id}`}</p>
			<p>
				You can render anything here, also you can add additional data
				on every row object
			</p>
			<p>
				expandRow.renderer callback will pass the origin row object to
				you
			</p>
		</div>
	)
}
const StateTable = props => {
	return (
		<BootstrapTable
			keyField="id"
			data={data}
			columns={columns}
			hover
			bootstrap4
			defaultSorted={options}
			expandRow={expandRow}
		/>
	)
}

export default StateTable
