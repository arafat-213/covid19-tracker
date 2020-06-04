import React, { useEffect, Fragment } from 'react'
import Dashboard from '../Dashboard/Dashboard'
import GloablTable from '../Tables/GlobalTable'
import RatioChart from '../Charts/RatioChart'
// Redux
import { connect } from 'react-redux'
import { getGlobalDashboard } from '../../actions/global'

const GlobalTracker = ({
	getGlobalDashboard,
	global: {
		dashboard,
		dashboard: { total },
		loading,
		timeStamp,
		countries,
		region
	}
}) => {
	useEffect(() => {
		getGlobalDashboard()
	}, [])
	return (
		<div>
			{!loading && (
				<Fragment>
					<Dashboard
						time={timeStamp}
						data={dashboard}
						region={region}
					/>
					<div data-aos='zoom-in-up'>
						<RatioChart
							recovered={total['recovered']}
							deaths={total['deceased']}
							active={
								total['confirmed'] -
								total['recovered'] -
								total['deceased']
							}
							confirmed={total['confirmed']}
							region={region}
						/>
					</div>
					<GloablTable data={countries} />
				</Fragment>
			)}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		global: state.global
	}
}

export default connect(mapStateToProps, { getGlobalDashboard })(GlobalTracker)
