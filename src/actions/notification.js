import { GET_NOTIFICATIONS } from './types'
import notificationAPI from '../api/notificationAPI'

export const getNotifications = () => async dispatch => {
	const res = await notificationAPI.get()
	dispatch({
		type: GET_NOTIFICATIONS,
		payload: res.data.slice(-5).reverse()
	})
}
