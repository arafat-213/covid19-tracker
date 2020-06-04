import {
	GET_GLOBAL_DASHBOARD,
	GET_GLOBAL_TIMESTAMP,
	GET_GLOBAL_COUNTRIES
} from './types'
import globalAPI from '../api/globalAPI'

export const getGlobalDashboard = () => async dispatch => {
	const response = await globalAPI.get(`/summary`)
	const {
		NewConfirmed,
		NewRecovered,
		NewDeaths,
		TotalConfirmed,
		TotalDeaths,
		TotalRecovered
	} = response.data['Global']
	const last_updated = response.data.Date
	const total = {
		delta: {
			confirmed: NewConfirmed,
			recovered: NewRecovered,
			deceased: NewDeaths
		},
		total: {
			confirmed: TotalConfirmed,
			deceased: TotalDeaths,
			recovered: TotalRecovered,
			active: TotalConfirmed - TotalRecovered - TotalDeaths
		},
		meta: {
			last_updated
		}
	}
	dispatch({
		type: GET_GLOBAL_DASHBOARD,
		payload: total
	})
	dispatch({
		type: GET_GLOBAL_TIMESTAMP,
		payload: response.data['Date']
	})

	const topCountries = response.data.Countries.sort(
		(a, b) => b.TotalConfirmed - a.TotalConfirmed
	)
		.slice(0, 20)
		.slice(0, 20)

	dispatch({
		type: GET_GLOBAL_COUNTRIES,
		payload: topCountries
	})
}
