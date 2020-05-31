import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './layout/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import GlobalTracker from './containers/GlobalTracker'
import IndiaTracker from './containers/IndiaTracker'
import StateTracker from './containers/StateTracker'
import './App.css'
import Navbar from './layout/Navbar'

const App = () => {
	/*Intializing Animation on scroll libraryy */
	useEffect(() => {
		Aos.init({ duration: 1500, once: true })
	}, [])

	return (
		<div className='container'>
			<Router>
				<div>
					<Navbar />
				</div>
				<Switch>
					<Route
						path='/covid19-tracker/global'
						exact
						component={GlobalTracker}
					/>
					<Route
						path='/covid19-tracker'
						exact
						render={() => <IndiaTracker />}
					/>
					<Route
						path='/covid19-tracker/state/:id'
						exact
						render={() => <StateTracker />}
					/>
				</Switch>
			</Router>

			<Footer />
		</div>
	)
}

export default App
