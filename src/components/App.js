import React from 'react'
import Dashboard from '../components/Dashboard'
import StateTable from './StateTable'

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
