import { GET_INDIA_DASHBOARD } from '../actions/types'

const initialState = {
	dashboard: {
		loading: true
	}
}

export default function (state = initialState, action) {
	const { type, payload } = action
	switch (type) {
		case GET_INDIA_DASHBOARD:
			return { ...state, dashboard: { ...payload, loading: false } }
		default:
			return state
	}
}
