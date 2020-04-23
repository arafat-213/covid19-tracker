import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import StateTable from './Tables/StateTable/StateTable'

const App = () => {
	return (
		<div className="container">
			<h1 className="diplay-3">Covid19 Tracker</h1>
			<Dashboard />
			<StateTable />
		</div>
	)
}

export default App
