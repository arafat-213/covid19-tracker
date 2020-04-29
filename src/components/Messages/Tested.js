import React from 'react'

const Tested = ({ tested, time, region, source }) => {
	return (
		<div className="card">
			<blockquote className="blockquote mb-0">
				<div className="card-header">
					<p>{region ? region : 'Loading...'}</p>
				</div>
				<div className="card-body">
					<p>
						Number of samples tested:{' '}
						{parseInt(tested).toLocaleString('en-IN')}
					</p>
					<footer className="blockquote-footer">As of {time}</footer>
					<footer className="blockquote-footer">
						<a
							href={source}
							target="_blank"
							rel="noopener noreferrer">
							source
						</a>
					</footer>
				</div>
			</blockquote>
		</div>
	)
}

export default Tested
