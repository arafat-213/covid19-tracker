import React from 'react'

const Tested = ({ tested, time }) => {
	return (
		<div className="card">
			<blockquote className="blockquote mb-0">
				<div className="card-body">
					<p>
						Number of samples tested:{' '}
						{parseInt(tested).toLocaleString('en-IN')}
					</p>
					<footer className="blockquote-footer">As of {time}</footer>
				</div>
			</blockquote>
		</div>
	)
}

export default Tested
