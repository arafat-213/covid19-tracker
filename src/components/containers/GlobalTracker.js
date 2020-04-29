import React, { useEffect, useState } from 'react'
import globalAPI from '../../api/globalAPI'
import Dashboard from '../Dashboard/Dashboard'
import GloablTable from '../Tables/GlobalTable'
import RatioChart from '../Charts/RatioChart'
const GlobalTracker = () => {
	const [GlobalCases, setGlobalCases] = useState([])
	const [updateTimeStamp, setUpdateTimeStamp] = useState('')
	const [region, setRegion] = useState('India')
	const [countryCases, setCountryCases] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await globalAPI.get(`/summary`)
			setGlobalCases(response.data.Global)

			setUpdateTimeStamp(response.data.Date)
			setRegion('Global')
			const country = response.data.Countries.sort(
				(a, b) => b.TotalConfirmed - a.TotalConfirmed
			)
				.slice(0, 20)
				.slice(0, 20)
			setCountryCases(country)
		}
		fetchData()
	}, [])
	return (
		<div>
			<Dashboard
				cases={GlobalCases}
				time={updateTimeStamp}
				region={region}
			/>
			<div data-aos="zoom-in-up">
				<RatioChart
					recovered={GlobalCases.TotalRecovered}
					deaths={GlobalCases.TotalDeaths}
					active={
						GlobalCases.TotalConfirmed -
						GlobalCases.TotalRecovered -
						GlobalCases.TotalDeaths
					}
					confirmed={GlobalCases.TotalConfirmed}
					region="Global"
				/>
			</div>
			<GloablTable data={countryCases} />
		</div>
	)
}

export default GlobalTracker
