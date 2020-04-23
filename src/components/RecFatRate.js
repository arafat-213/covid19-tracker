import React from 'react'

export default ({ recovered, deaths }) => {
	let numRecovered = parseInt(recovered)
	let numDeaths = parseInt(deaths)
	if (numRecovered !== 0 && numDeaths !== 0) {
		return (
			<div>
				<p className="text-success">
					Recovery rate:{' '}
					{(
						(numRecovered / (numDeaths + numRecovered)) *
						100
					).toFixed(2)}{' '}
					%
				</p>
				<p className="text-danger">
					Fatality rate:{' '}
					{((numDeaths / (numDeaths + numRecovered)) * 100).toFixed(
						2
					)}{' '}
					%
				</p>
			</div>
		)
	}
	return <></>
}
