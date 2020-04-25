import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'bootstrap/dist/css/bootstrap.css'
// import '../Table.css'

const columns = [
	{
		dataField: 'Country',
		text: 'Country',
		sort: true,
		classes: 'district-text'
	},
	{
		dataField: 'NewConfirmed',
		isDummy: true,
		text: '',
		formatter: (cell, row) =>
			cell === 0 ? (
				<span></span>
			) : (
				<span className="float-right daily-confirmed">
					&#8673;{cell.toLocaleString('en-IN')}
				</span>
			)
	},
	{
		dataField: 'TotalConfirmed',
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
		dataField: 'NewRecovered',
		isDummy: true,
		text: '',
		formatter: (cell, row) =>
			cell === 0 ? (
				<span></span>
			) : (
				<span className="float-right daily-recovered">
					&#8673;{cell.toLocaleString('en-IN')}
				</span>
			)
	},
	{
		dataField: 'TotalRecovered',
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
		dataField: 'NewDeaths',
		isDummy: true,
		text: '',
		formatter: (cell, row) =>
			cell === 0 ? (
				<span></span>
			) : (
				<span className="float-right daily-deceased">
					&#8673;{cell.toLocaleString('en-IN')}
				</span>
			)
	},
	{
		dataField: 'TotalDeaths',
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

const GloablTable = props => {
	return (
		<div>
			<h1>Test</h1>
			<BootstrapTable
				wrapperClasses="table-responsive"
				headerClasses="thead-dark"
				keyField="CountryCode"
				data={props.data}
				columns={columns}
				hover
				bootstrap4
				condensed
				striped
				bordered={false}
			/>
		</div>
	)
}
export default GloablTable
