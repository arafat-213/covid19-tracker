import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import StateTable from './Tables/StateTable/StateTable'

const App = () => {
	return (
		<div className="container">
			<h3>Covid19 Tracker</h3>
			<Dashboard />
			<StateTable />
		</div>
	)
}

export default App
