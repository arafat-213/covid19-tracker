import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import stateNames from '../../../utils/stateNames.js'
const StateTablev2 = ({ data, loading }) => {
	useEffect(() => {
		delete data['loading']
	}, [data])
	console.log(stateNames[0])

	return (
		!loading &&
		data && (
			<table className='table table-hover table-condensed table-striped'>
				<thead className='thead-dark'>
					<tr>
						<th colSpan='2' width='30%'>
							State/UT
						</th>
						<th colSpan='2' width='15%' className='text-center'>
							Confirmed
						</th>
						<th width='15%' colSpan='2' className='text-center'>
							Active
						</th>
						<th colSpan='2' width='15%' className='text-center'>
							Recovered
						</th>
						<th colSpan='2' width='15%' className='text-center'>
							Deceased
						</th>
					</tr>
				</thead>

				<tbody>
					{data.map(
						province =>
							province[1].total && (
								<tr key={province[0]}>
									<td>
										<i className='fas fa-caret-right'></i>
									</td>
									<td>
										{stateNames[province[0]]
											? stateNames[province[0]]
											: province[0]}{' '}
										{province[1].meta &&
											province[1].meta.notes && (
												<i
													className='fas fa-info-circle'
													title={
														province[1].meta.notes
													}></i>
											)}
									</td>

									{/* New confirmed */}
									{province[1].delta &&
									province[1].delta.confirmed ? (
										<td className='text-right daily-confirmed'>
											&#8673;
											{province[1].delta.confirmed.toLocaleString(
												'en-IN'
											)}
										</td>
									) : (
										<td></td>
									)}

									{/* Total confirmed */}
									{province[1].total &&
									province[1].total.confirmed ? (
										<td>
											{province[1].total.confirmed.toLocaleString(
												'en-IN'
											)}
										</td>
									) : (
										<td>-</td>
									)}

									{/* New active */}
									{province[1].delta ? (
										<td className='text-right daily-active'>
											{(province[1].delta.confirmed ||
												0) -
												(province[1].delta.recovered ||
													0) -
												(province[1].delta.deceased ||
													0) >=
											0 ? (
												<>&#8673;</>
											) : (
												<>&#8675;</>
											)}

											{(
												(province[1].delta.confirmed ||
													0) -
												(province[1].delta.recovered ||
													0) -
												(province[1].delta.deceased ||
													0)
											).toLocaleString('en-IN')}
										</td>
									) : (
										<td></td>
									)}
									{/* Total active */}
									{province[1].total && (
										<td>
											{(
												(province[1].total.confirmed ||
													0) -
												(province[1].total.recovered ||
													0) -
												(province[1].total.deceased ||
													0)
											).toLocaleString('en-IN')}
										</td>
									)}

									{/* New recovered */}
									{province[1].delta &&
									province[1].delta.recovered ? (
										<td className='text-right daily-recovered'>
											{' '}
											&#8673;
											{province[1].delta.recovered.toLocaleString(
												'en-IN'
											)}
										</td>
									) : (
										<td></td>
									)}

									{/* Total recovered */}
									{province[1].total &&
									province[1].total.recovered ? (
										<td>
											{province[1].total.recovered.toLocaleString(
												'en-IN'
											)}
										</td>
									) : (
										<td>-</td>
									)}

									{/* New deceased */}
									{province[1].delta &&
									province[1].delta.deceased ? (
										<td className='text-right daily-deceased'>
											{' '}
											&#8673;
											{province[1].delta.deceased.toLocaleString(
												'en-IN'
											)}
										</td>
									) : (
										<td></td>
									)}

									{/* Total recovered */}
									{province[1].total &&
									province[1].total.deceased ? (
										<td>
											{province[1].total.deceased.toLocaleString(
												'en-IN'
											)}
										</td>
									) : (
										<td>-</td>
									)}
								</tr>
							)
					)}
				</tbody>
			</table>
		)
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		data: Object.entries(state.india.states),
		loading: state.india.states.loading,
		meta: state.india.states.meta
	}
}

export default connect(mapStateToProps)(StateTablev2)
