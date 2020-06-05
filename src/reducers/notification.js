import { GET_NOTIFICATIONS } from '../actions/types'

const initialState = { notifications: [] }

export default function (state = initialState, action) {
	const { type, payload } = action
	switch (type) {
		case GET_NOTIFICATIONS:
			return { ...state, notifications: payload }
		default:
			return state
	}
}
