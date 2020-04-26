import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './Messages/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Header from './Messages/Header'
import GlobalTracker from './containers/GlobalTracker'

import IndiaTracker from './containers/IndiaTracker'

const App = () => {
	/*Intializing Animation on scroll libraryy */
	useEffect(() => {
		Aos.init({ duration: 1500 })
	}, [])

	return (
		<div className="container">
			<Router>
				<Header />
				<Switch>
					<Route
						path="/covid19-tracker/global"
						exact
						component={GlobalTracker}
					/>
					<Route
						path="/covid19-tracker"
						exact
						render={() => <IndiaTracker />}
					/>
				</Switch>
			</Router>

			<Footer />
		</div>
	)
}

export default App
