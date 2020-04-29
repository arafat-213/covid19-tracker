import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import DistrictTable from '../DistrictTable/DistrictTable'
import '../Table.css'
import Tested from '../../Messages/Tested'
import _ from 'lodash'

const columns = [
	{
		dataField: 'state',
		text: 'State/UT',
		sort: true,
		classes: 'district-text'
	},
	{
		dataField: 'deltaconfirmed',
		isDummy: true,
		text: '',
		formatter: (cell, row) =>
			cell === 0 ? (
				<span></span>
			) : (
				<span className="float-right daily-confirmed">
					&#8673;{`${cell}`}
				</span>
			)
	},
	{
		dataField: 'confirmed',
		text: 'Confirmed',
		sort: true,
		formatter: (cell, row) =>
			cell === 0 ? (
				<span> - </span>
			) : (
				<span>{parseInt(cell).toLocaleString('en-IN')}</span>
			)
	},
	{
		dataField: 'active',
		text: 'Active',
		sort: true,
		formatter: (cell, row) =>
			cell === 0 ? (
				<span> - </span>
			) : (
				<span>{parseInt(cell).toLocaleString('en-IN')}</span>
			)
	},
	{
		dataField: 'deltarecovered',
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
		dataField: 'recovered',
		text: 'Recovered',
		sort: true,
		formatter: (cell, row) =>
			cell === 0 ? (
				<span> - </span>
			) : (
				<span>{parseInt(cell).toLocaleString('en-IN')}</span>
			)
	},
	{
		dataField: 'deltadeaths',
		isDummy: true,
		text: '',
		formatter: (cell, row) =>
			cell === 0 ? (
				<span></span>
			) : (
				<span className="float-right daily-deceased">
					&#8673;{`${cell}`}
				</span>
			)
	},
	{
		dataField: 'deaths',
		text: 'Deaths',
		sort: true,
		formatter: (cell, row) =>
			cell === 0 ? (
				<span> - </span>
			) : (
				<span>{parseInt(cell).toLocaleString('en-IN')}</span>
			)
	}
]

const defaultSort = [
	{
		dataField: 'confirmed',
		order: 'desc'
	}
]

const StateTable = ({ data, districtData, tested }) => {
	const expandRow = {
		renderer: row => (
			<div>
				<div data-aos="fade-down">
					<DistrictTable row={row} data={districtData} />
				</div>
			</div>
		),
		showExpandColumn: true,
		expandColumnRenderer: ({ expanded }) =>
			expanded ? (
				<i className="fas fa-caret-down"></i>
			) : (
				<i className="fas fa-caret-right"></i>
			),
		expandHeaderColumnRenderer: ({ isAnyExpands }) => (
			// ....
			<span></span>
		)
	}

	return (
		<div data-aos="fade-up">
			<BootstrapTable
				wrapperClasses="table-responsive"
				headerClasses="thead-dark"
				keyField="state"
				data={data}
				columns={columns}
				hover
				bootstrap4
				condensed
				striped
				defaultSorted={defaultSort}
				expandRow={expandRow}
				bordered={false}
			/>
		</div>
	)
}

export default StateTable
