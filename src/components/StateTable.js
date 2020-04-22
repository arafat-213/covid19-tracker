import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import useStateCases from '../hooks/useStateCases'

const columns = [
	{
		dataField: 'state',
		text: 'State/UT',
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
		dataField: 'deaths',
		text: 'Deaths',
		sort: true
	}
]

const defaultSort = [
	{
		dataField: 'confirmed',
		order: 'desc'
	}
]

const expandRow = {
	renderer: (row, rowIndex) => (
		<div>
			<p>{`This Expand row is belong to rowKey ${row.state}`}</p>
		</div>
	)
}
const StateTable = props => {
	const data = useStateCases()
	return (
		<BootstrapTable
			keyField="state"
			data={data}
			columns={columns}
			hover
			bootstrap4
			defaultSorted={defaultSort}
			expandRow={expandRow}
		/>
	)
}

export default StateTable
