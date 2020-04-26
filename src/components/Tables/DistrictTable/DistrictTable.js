import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import RatioChart from '../../Charts/RatioChart'
import './DistrictTable.css'
import UpdateTime from '../../Messages/UpdateTime'

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
		formatter: (cell, row) =>
			cell === 0 ? (
				<span></span>
			) : (
				<span className="float-right daily-confirmed">{`+${cell}`}</span>
			)
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
				<span className="float-right daily-recovered">
					&#8673;{`${cell}`}
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
				<span
					className="float-right"
					style={{ color: 'red' }}>{`+${cell}`}</span>
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
	row: { state, lastupdatedtime, recovered, deaths, active, confirmed },
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
			<div data-aos="zoom-in-up" data-aos-once="true">
				<RatioChart
					recovered={recovered}
					deaths={deaths}
					active={active}
					confirmed={confirmed}
					state={state}
				/>
			</div>
			<div
				data-aos="fade-up-left"
				data-aos-once="true"
				data-aos-duration="1000">
				<UpdateTime
					style={{ marginTop: '2px' }}
					time={lastupdatedtime}
				/>
			</div>
			<div data-aos="fade-up" data-aos-duration="1000">
				<BootstrapTable
					wrapperClasses="table-responsive"
					headerClasses="thead-dark"
					keyField="district"
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
