import {
	GET_GLOBAL_DASHBOARD,
	GET_GLOBAL_TIMESTAMP,
	GET_GLOBAL_COUNTRIES
} from './types'
import globalAPI from '../api/globalAPI'

export const getGlobalDashboard = () => async dispatch => {
	const response = await globalAPI.get(`/summary`)
	dispatch({
		type: GET_GLOBAL_DASHBOARD,
		payload: response.data['Global']
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
