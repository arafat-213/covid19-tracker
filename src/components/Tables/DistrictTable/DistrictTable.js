import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import './DistrictTable.css'

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
		text: 'Confirmed',
		dataField: 'confirmed',
		sort: true,
		formatter: (cell, row) =>
			cell === 0 ? (
				<span> - </span>
			) : (
				<span>{parseInt(cell).toLocaleString('en-IN')}</span>
			)
	},
	{
		dataField: 'delta.active',
		isDummy: true,
		text: '',
		formatter: (cell, row) => {
			let deltaActive =
				(row.delta.confirmed || 0) -
				(row.delta.recovered || 0) -
				(row.delta.deaths || 0)
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
		text: 'Active',
		dataField: 'active',
		sort: true,
		formatter: (cell, row) =>
			cell === 0 ? (
				<span> - </span>
			) : (
				<span>{parseInt(cell).toLocaleString('en-IN')}</span>
			)
	},
	{
		dataField: 'delta.recovered',
		isDummy: true,
		text: '',
		formatter: (cell, row) =>
			cell === 0 ? (
				<span></span>
			) : (
				<span className='float-right daily-recovered'>
					&#8673;{parseInt(cell).toLocaleString('en-IN')}
				</span>
			)
	},
	{
		text: 'Recovered',
		dataField: 'recovered',
		sort: true,
		formatter: (cell, row) =>
			cell === 0 ? (
				<span> - </span>
			) : (
				<span>{parseInt(cell).toLocaleString('en-IN')}</span>
			)
	},
	{
		dataField: 'delta.deceased',
		isDummy: true,
		text: '',
		formatter: (cell, row) =>
			cell === 0 ? (
				<span></span>
			) : (
				<span className='float-right daily-deceased'>
					&#8673;{parseInt(cell).toLocaleString('en-IN')}
				</span>
			)
	},
	{
		text: 'Deaths',
		dataField: 'deceased',
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

const DistrictTable = ({
	row: { state, lastupdatedtime, statecode },
	data
}) => {
	// const response = useDistrictCases()
	let tableData = []
	data = data.filter(obj => obj.state === state)
	if (data[0]) {
		tableData = data[0].districtData
	}

	return (
		<div>
			<div
				data-aos='fade-up-left'
				data-aos-once='true'
				data-aos-duration='1000'>
				{/* <UpdateTime
					style={{ marginTop: '2px' }}
					time={moment(lastupdatedtime).fromNow()}
				/> */}
			</div>

			<div
				data-aos='fade-up'
				data-aos-duration='1000'
				data-aos-once='true'>
				<BootstrapTable
					wrapperClasses='table-responsive'
					headerClasses='thead-dark'
					keyField='district'
					columns={columns}
					data={tableData}
					hover
					bootstrap4
					bordered={false}
					condensed
					defaultSorted={defaultSort}
				/>
			</div>
		</div>
	)
}

export default DistrictTable
