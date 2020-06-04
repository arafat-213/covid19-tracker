import {
	GET_GLOBAL_DASHBOARD,
	GET_GLOBAL_TIMESTAMP,
	GET_GLOBAL_COUNTRIES
} from '../actions/types'

const initialState = {
	dashboard: {
		loading: true
	},
	countries: [],
	timeStamp: '',
	region: 'Global'
}

export default function (state = initialState, action) {
	const { type, payload } = action
	switch (type) {
		case GET_GLOBAL_DASHBOARD:
			return {
				...state,
				dashboard: {
					...payload,
					loading: false
				}
			}
		case GET_GLOBAL_TIMESTAMP:
			return {
				...state,
				timeStamp: payload
			}
		case GET_GLOBAL_COUNTRIES:
			return {
				...state,
				countries: payload
			}
		default:
			return state
	}
}
