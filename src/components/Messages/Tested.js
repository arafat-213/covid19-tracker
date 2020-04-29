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
					<footer>As of {time}</footer>
				</div>
				<div className="col">
					<div className="col card-body">
						<div className="h3 test-numbers">
							{parseInt(tested).toLocaleString('en-IN')}
						</div>
						<p>Samples tested</p>
						<a
							href={source}
							target="_blank"
							rel="noopener noreferrer">
							source
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Tested
