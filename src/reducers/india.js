import { GET_INDIA_DASHBOARD, GET_INDIA_STATES } from '../actions/types'

const initialState = {
	dashboard: {},
	loading: true,
	states: [],
	region: 'India'
}

export default function (state = initialState, action) {
	const { type, payload } = action
	switch (type) {
		case GET_INDIA_DASHBOARD:
			return { ...state, dashboard: payload, loading: false }
		case GET_INDIA_STATES:
			return { ...state, states: payload }
		default:
			return state
	}
}
