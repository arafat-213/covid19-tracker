import React, { useEffect, useState } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import Dashboard from '../components/Dashboard/Dashboard'
import StateTable from './Tables/StateTable/StateTable'
import Footer from './Messages/Footer'
import covidData from '../api/covidData'
import GloablTable from './Tables/GlobalTable'
import { createBrowserHistory } from 'history'
import globalAPI from '../api/globalAPI'

const App = () => {
	const history = createBrowserHistory()
	const [cases, setCases] = useState([])
	const [updateTimeStamp, setUpdateTimeStamp] = useState('')
	const [region, setRegion] = useState('India')

	const pathName = history.location.pathname

	useEffect(() => {
		if (pathName === '/global') {
			globalAPI.get(`/summary`).then(response => {
				setCases(response.data.Global)
				setUpdateTimeStamp(response.data.Date)
				setRegion('Global')
			})
		} else {
			covidData.get().then(response => {
				setCases(response.data.statewise[0])
				setUpdateTimeStamp(response.data.statewise[0].lastupdatedtime)
				setRegion('India')
			})
		}
	}, [])

	return (
		<div className="container">
			<Router history={history}>
				<h1 className="diplay-3">Covid19 Tracker</h1>
				<Dashboard
					cases={cases}
					time={updateTimeStamp}
					region={region}
				/>
				<Switch>
					<Route path="/global" exact component={GloablTable} />
					<Route path="/" exact component={StateTable} />
				</Switch>
				<Footer />
			</Router>
		</div>
	)
}

export default App
