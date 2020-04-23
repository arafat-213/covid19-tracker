import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import useStateCases from '../../../hooks/useStateCases'
import DistrictTable from '../DistrictTable/DistrictTable'

const columns = [
	{
		dataField: 'state',
		text: 'State/UT',
		sort: true
	},
	{
		dataField: 'deltaconfirmed',
		isDummy: true,
		text: ' ',
		formatter: (cell, row) =>
			cell === 0 ? (
				<span></span>
			) : (
				<span style={{ color: '#f6ac15' }}>&#8673;{`${cell}`}</span>
			)
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
		dataField: 'deltarecovered',
		isDummy: true,
		text: '',
		formatter: (cell, row) =>
			cell === 0 ? (
				<span></span>
			) : (
				<span style={{ color: 'green' }}>&#8673;{`${cell}`}</span>
			)
	},
	{
		dataField: 'recovered',
		text: 'Recovered',
		sort: true
	},
	{
		dataField: 'deltadeaths',
		isDummy: true,
		text: '',
		formatter: (cell, row) =>
			cell === 0 ? (
				<span></span>
			) : (
				<span style={{ color: 'red' }}>&#8673;{`${cell}`}</span>
			)
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
			<DistrictTable state={row.state} time={row.lastupdatedtime} />
		</div>
	),
	showExpandColumn: true
}

const StateTable = props => {
	const data = useStateCases()
	console.log('From state', data)

	return (
		<BootstrapTable
			wrapperClasses="table-responsive"
			keyField="state"
			data={data}
			columns={columns}
			hover
			bootstrap4
			condensed
			striped
			defaultSorted={defaultSort}
			expandRow={expandRow}
		/>
	)
}

export default StateTable
