import { GET_INDIA_DASHBOARD, GET_INDIA_TIMESTAMP } from './types'
import indiav3API from '../api/indiav3API'

export const getIndiaDashboard = () => async dispatch => {
	const res = await indiav3API.get()

	dispatch({
		type: GET_INDIA_DASHBOARD,
		payload: res.data['TT']
	})
}
