import React from 'react'

export default ({ recovered, deaths }) => {
	let numRecovered = parseInt(recovered)
	let numDeaths = parseInt(deaths)
	if (numRecovered !== 0 && numDeaths !== 0) {
		return (
			<div>
				<p style={{ color: 'green' }}>
					Recovery rate:{' '}
					{(
						(numRecovered / (numDeaths + numRecovered)) *
						100
					).toFixed(2)}{' '}
					%
				</p>
				<p style={{ color: 'red' }}>
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
