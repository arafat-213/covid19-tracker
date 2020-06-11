import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import DistrictTable from '../DistrictTable/DistrictTable'
import '../Table.css'
import { Link } from 'react-router-dom'

const STATE_UNASSIGNED_NOTE = `MoHFW website reports that these are the ""cases
							that are being reassigned to states"" [Jun 8] : 519
							cases were added to this category today at 9:30 AM.
							After that, MoHFW reduced 1352 cases. In effect 773
							cases were reduced from this category.`
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
		formatter: (cell, row) => {
			let arrow = cell > 0 ? <span>&#8673;</span> : <span>&#8675;</span>
			return cell === 0 ? (
				<span></span>
			) : (
				<span className='float-right daily-confirmed'>
					{arrow}
					{`${cell}`}
				</span>
			)
		}
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
		dataField: 'deltaactive',
		isDummy: true,
		text: '',
		formatter: (cell, row) => {
			let deltaActive =
				(row.deltaconfirmed || 0) -
				(row.deltarecovered || 0) -
				(row.deltadeaths || 0)
			let arrow =
				deltaActive > 0 ? <span>&#8673;</span> : <span>&#8675;</span>
			return deltaActive === 0 ? (
				<span></span>
			) : (
				<span className='float-right daily-active'>
					<span>{arrow}</span>
					{`${deltaActive}`}
				</span>
			)
		}
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
				<span className='float-right daily-recovered'>
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
				<span className='float-right daily-deceased'>
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

const StateTable = ({ data, districtData }) => {
	const expandRow = {
		renderer: row => (
			<div>
				<div>
					{' '}
					{row.statecode === 'UN' ? (
						<p>{STATE_UNASSIGNED_NOTE}</p>
					) : (
						<p>
							<Link
								to={`/covid19-tracker/state/${row.statecode}`}>
								Visit State Page
							</Link>
						</p>
					)}
					<div data-aos='fade-down' data-aos-once='true'>
						<DistrictTable row={row} data={districtData} />
					</div>
				</div>
			</div>
		),
		showExpandColumn: true,
		expandColumnRenderer: ({ expanded }) =>
			expanded ? (
				<i className='fas fa-caret-down'></i>
			) : (
				<i
					className='fas fa-caret-right'
					title='click here to view distrcit wise cases'></i>
			),
		expandHeaderColumnRenderer: ({ isAnyExpands }) => (
			// ....
			<span></span>
		)
	}

	return (
		<div
			data-aos='fade-up'
			data-aos-once='true'
			style={{ marginTop: '16px' }}>
			<BootstrapTable
				wrapperClasses='table-responsive'
				headerClasses='thead-dark'
				keyField='state'
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
