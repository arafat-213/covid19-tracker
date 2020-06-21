import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Tested.css'
import CountUp from 'react-countup'
import { stateNames } from '../../utils/stateNames'

const renderDropdown = () => {
	delete stateNames['UN']
	let list = []
	for (const key in stateNames) {
		list.push(
			<Link
				key={key}
				to={`/covid19-tracker/state/${key}`}
				className='dropdown-item'>
				{stateNames[key]}
			</Link>
		)
	}
	return list
}

const Tested = ({ tested, newTest, time, region, source }) => {
	return (
		<div>
			<div className='row'>
				<div className='col'>
					<div className='region-title'>
						<p className='display-4 region-title'>
							{region ? region : 'Loading...'}

							{region !== 'India' && (
								<Fragment>
									<span
										className='dropdown-toggle dropdown-toggle-split'
										data-toggle='dropdown'
										aria-haspopup='true'
										aria-expanded='false'></span>
									<span className='sr-only'>
										Toggle Dropdown
									</span>
									<div className='dropdown-menu'>
										{renderDropdown()}
									</div>
								</Fragment>
							)}
						</p>
					</div>
				</div>
				<div className='col'>
					<div className='col card-body text-right'>
						<div className='h3 test-numbers mb-0'>
							{/* {parseInt(tested).toLocaleString('en-IN')} */}
							<CountUp
								start={0}
								end={tested}
								duration={2.0}
								separator=','
							/>
						</div>

						{newTest ? (
							<p className='mb-0 test-numbers h5'>
								[+
								<CountUp
									start={0}
									end={parseInt(newTest)}
									separator=','
								/>
								]
							</p>
						) : (
							<p>[N.A.]</p>
						)}
						<p className='test-text mb-0'>
							Samples tested{' '}
							<a
								href={source}
								target='_blank'
								rel='noopener noreferrer'>
								<i className='fas fa-link'></i>
							</a>
						</p>
						<p className='test-text'>
							{' '}
							<i className='fas fa-history'></i> {time} ago
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Tested
