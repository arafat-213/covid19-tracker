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
import Header from './Messages/Header'
import GlobalTracker from './Messages/GlobalTracker'

const App = () => {
	const history = createBrowserHistory()
	const [cases, setCases] = useState([])
	const [updateTimeStamp, setUpdateTimeStamp] = useState('')
	const [region, setRegion] = useState('India')
	const [countryCases, setCountryCases] = useState([])
	let pathName = history.location.pathname

	useEffect(() => {
		if (pathName === '/covid19-tracker/global') {
			console.log('IN global effect')
			globalAPI.get(`/summary`).then(response => {
				setCases(response.data.Global)
				setUpdateTimeStamp(response.data.Date)
				setRegion('Global')
				const country = response.data.Countries.sort(
					(a, b) => b.TotalConfirmed - a.TotalConfirmed
				)
					.slice(0, 20)
					.slice(0, 20)
				setCountryCases(country)
			})
		} else {
			console.log('India effect')
			covidData.get().then(response => {
				setCases(response.data.statewise[0])
				setUpdateTimeStamp(response.data.statewise[0].lastupdatedtime)
				setRegion('India')
			})
		}
	}, [region, pathName])

	/*Intializing Animation on scroll libraryy */
	useEffect(() => {
		Aos.init({ duration: 1500 })
	}, [])

	return (
		<div className="container">
			<Header />
			<Router history={history}>
				<Dashboard
					cases={cases}
					time={updateTimeStamp}
					region={region}
				/>
				<Switch>
					<Route
						path="/covid19-tracker/globalTracker"
						exact
						component={GlobalTracker}
					/>
					<Route
						path="/covid19-tracker/global"
						exact
						render={() => <GloablTable data={countryCases} />}
					/>
					<div data-aos="fade-up" data-aos-duration="3000">
						<Route path="/" component={StateTable} />
					</div>
				</Switch>
			</Router>

			<div data-aos="flip-down">
				<Footer />
			</div>
		</div>
	)
}

export default App
