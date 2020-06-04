import { GET_STATE_TIMELINE, GET_ENTIRE_TIMELINE } from '../actions/types'

const initialState = {
	fullTimeline: {},
	province: { timeline: {}, loading: true },
	loading: true
}

export default function (state = initialState, action) {
	const { type, payload } = action
	switch (type) {
		case GET_ENTIRE_TIMELINE:
			return { ...state, fullTimeline: payload, loading: false }
		case GET_STATE_TIMELINE:
			return { ...state, province: { timeline: payload, loading: false } }
		default:
			return state
	}
}
