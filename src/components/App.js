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
import GlobalTracker from './containers/GlobalTracker'
import India from './containers/India'

const App = () => {
	const history = createBrowserHistory()
	let pathName = history.location.pathname
	console.log(pathName)

	// useEffect(() => {
	// 	console.log('IN global effect')
		
	// 	})
	// 	// console.log('India effect')
	// 	// covidData.get().then(response => {
	// 	// 	setIndiaCases(response.data.statewise[0])
	// 	// 	setUpdateTimeStamp(response.data.statewise[0].lastupdatedtime)
	// 	// 	setRegion('India')
	// 	// })
	// }, [])

	/*Intializing Animation on scroll libraryy */
	useEffect(() => {
		Aos.init({ duration: 1500 })
	}, [])

	return (
		<div className="container">
			<Router history={history}>
				<Header />
				{/* <Dashboard
					cases={Indiacases}
					time={updateTimeStamp}
					region={region}
				/> */}
				<Switch>
					<Route
						path="/covid19-tracker/global"
						exact
						component={GlobalTracker}
					/>
					<div data-aos="fade-up" data-aos-duration="3000">
						<Route
							path="/covid19-tracker"
							exact
							render={() => (
								<India/>
							)}
						/>
					</div>
				</Switch>
			</Router>
			{/* <StateTable /> */}
			<div data-aos="flip-down">
				<Footer />
			</div>
		</div>
	)
}

export default App
