import { GET_INDIA_DASHBOARD, GET_INDIA_STATES } from './types'
import indiav3API from '../api/indiav3API'

export const getIndiaDashboard = () => async dispatch => {
	const res = await indiav3API.get()

	dispatch({
		type: GET_INDIA_DASHBOARD,
		payload: res.data['TT']
	})

	// Delete total and unassigned states' data
	delete res.data['TT']
	delete res.data['UN']
	dispatch({
		type: GET_INDIA_STATES,
		payload: res.data
	})
}
