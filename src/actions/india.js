import { GET_INDIA_DASHBOARD } from './types'
import indiav3API from '../api/indiav3API'

export const getIndiaDashboard = () => async dispatch => {
	const res = await indiav3API.get()
	console.log(res.data)

	dispatch({
		type: GET_INDIA_DASHBOARD,
		payload: res.data['TT']
	})
}
