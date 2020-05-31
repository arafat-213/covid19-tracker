import React from 'react'
import './Tested.css'

const Tested = ({ tested, time, region, source }) => {
	return (
		<div>
			<div className="row">
				<div className="col">
					<p className="display-4 region-title">
						{region ? region : 'Loading...'}
					</p>
				</div>
				<div className="col">
					<div className="col card-body text-right">
						<div className="h3 test-numbers mb-0">
							{parseInt(tested).toLocaleString('en-IN')}
						</div>
						<p className="test-text mb-0">
							Samples tested{' '}
							<a
								href={source}
								target="_blank"
								rel="noopener noreferrer">
								<i className="fas fa-link"></i>
							</a>
						</p>
						<p className="test-text">As of {time}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Tested
