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
import NotFound from './layout/NotFound'
import AboutMe from './Pages/AboutMe'
import FAQ from './Pages/FAQ'
// Redux
import { Provider } from 'react-redux'
import store from '../store'

const App = () => {
	/*Intializing Animation on scroll libraryy */
	useEffect(() => {
		Aos.init({ duration: 1500, once: true })
	}, [])

	return (
		<Provider store={store}>
			<div className='container page-container'>
				<div className='content-wrap'>
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
							<Route
								path='/covid19-tracker/about'
								exact
								component={AboutMe}
							/>
							<Route
								path='/covid19-tracker/faq'
								exact
								component={FAQ}
							/>
							<Route component={NotFound} />
						</Switch>
					</Router>

					<Footer />
				</div>
			</div>
		</Provider>
	)
}

export default App
