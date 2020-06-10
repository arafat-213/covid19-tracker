import React from 'react'
import './Tested.css'
import CountUp from 'react-countup'

const Tested = ({ tested, newTest, time, region, source }) => {
	return (
		<div>
			<div className='row'>
				<div className='col'>
					<p className='display-4 region-title'>
						{region ? region : 'Loading...'}
					</p>
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
