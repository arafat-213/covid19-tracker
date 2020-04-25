import React, { useEffect, useState } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import Dashboard from '../components/Dashboard/Dashboard'
import StateTable from './Tables/StateTable/StateTable'
import Footer from './Messages/Footer'
import covidData from '../api/covidData'
import GloablTable from './Tables/GlobalTable'
import { createBrowserHistory } from 'history'
import globalAPI from '../api/globalAPI'
import Aos from 'aos'
import 'aos/dist/aos.css'

const App = () => {
	const history = createBrowserHistory()
	const [cases, setCases] = useState([])
	const [updateTimeStamp, setUpdateTimeStamp] = useState('')
	const [region, setRegion] = useState('India')

	const pathName = history.location.pathname

	useEffect(() => {
		if (pathName === '/covid19-tracker/global') {
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

	/*Intializing Animation on scroll libraryy */
	useEffect(() => {
		Aos.init({ duration: 1500 })
	}, [])

	return (
		<div className="container">
			<Router history={history}>
				<div data-aos="fade-down-right" data-aos-duration="1000">
					<h1 className="diplay-3">Covid19 Tracker</h1>
				</div>
				<Dashboard
					cases={cases}
					time={updateTimeStamp}
					region={region}
				/>
				<Switch>
					<Route
						path="/covid19-tracker/global"
						exact
						component={GloablTable}
					/>
					<div data-aos="fade-up" data-aos-duration="3000">
						<Route
							path="/covid19-tracker"
							exact
							component={StateTable}
						/>
					</div>
				</Switch>

				<div data-aos="flip-down">
					<Footer />
				</div>
			</Router>
		</div>
	)
}

export default App
