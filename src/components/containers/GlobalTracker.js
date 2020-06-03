import React, { useEffect } from 'react'
import Dashboard from '../Dashboard/Dashboard'
import GloablTable from '../Tables/GlobalTable'
import RatioChart from '../Charts/RatioChart'
// Redux
import { connect } from 'react-redux'
import { getGlobalDashboard } from '../../actions/global'

const GlobalTracker = ({
	getGlobalDashboard,
	global: { total, timeStamp, countries, region }
}) => {
	useEffect(() => {
		getGlobalDashboard()
	}, [])
	return (
		<div>
			<Dashboard cases={total} time={timeStamp} region={region} />
			<div data-aos='zoom-in-up'>
				<RatioChart
					recovered={total.TotalRecovered}
					deaths={total.TotalDeaths}
					active={
						total.TotalConfirmed -
						total.TotalRecovered -
						total.TotalDeaths
					}
					confirmed={total.TotalConfirmed}
					region={region}
				/>
			</div>
			<GloablTable data={countries} />
		</div>
	)
}

const mapStateToProps = state => {
	return {
		global: state.global
	}
}

export default connect(mapStateToProps, { getGlobalDashboard })(GlobalTracker)
