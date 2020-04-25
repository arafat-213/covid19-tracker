import React, { useEffect, useState } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	withRouter
} from 'react-router-dom'
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

const App = () => {
	const history = createBrowserHistory()
	const [cases, setCases] = useState([])
	const [updateTimeStamp, setUpdateTimeStamp] = useState('')
	const [region, setRegion] = useState('India')
	const [countryCases, setCountryCases] = useState([])
	const pathName = history.location.pathname

	useEffect(() => {
		if (pathName === '/tracker/global') {
			globalAPI.get(`/summary`).then(response => {
				setCases(response.data.Global)
				setUpdateTimeStamp(response.data.Date)
				setRegion('Global')
				const country = response.data.Countries.sort(
					(a, b) => b.TotalConfirmed - a.TotalConfirmed
				).slice(0, 20)
				// const top20 = country
				// 	.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
				// 	.slice(0, 20)
				setCountryCases(country)
			})
		} else {
			covidData.get().then(response => {
				setCases(response.data.statewise[0])
				setUpdateTimeStamp(response.data.statewise[0].lastupdatedtime)
				setRegion('India')
			})
		}
	}, [region])

	/*Intializing Animation on scroll libraryy */
	useEffect(() => {
		Aos.init({ duration: 1500 })
	}, [])

	const routes = {
		path: '/',
		component: App,
		childRoutes: [
			{
				path: '/covid19-tracker',
				component: StateTable,
				childRoutes: [
					{ path: '/covid19-tracker/global', component: GloablTable }
				]
			}
		]
	}

	return (
		<div className="container">
			<Router history={history}>
				<Header />
				<Dashboard
					cases={cases}
					time={updateTimeStamp}
					region={region}
				/>
				<Switch>
					<Route
						path="/tracker/global"
						exact
						render={() => <GloablTable data={countryCases} />}
					/>
					<Route path="/" component={StateTable} />
					<div data-aos="fade-up" data-aos-duration="3000"></div>
				</Switch>
			</Router>

			<div data-aos="flip-down">
				<Footer />
			</div>
		</div>
	)
}

export default App
