import { GET_STATE_TIMELINE, GET_ENTIRE_TIMELINE } from './types'
import indiaTimeline from '../api/indiaTimeline'

export const getEntireTimeline = (statecode, day) => async dispatch => {
	const res = await indiaTimeline.get()
	// dispatch({
	// 	type: GET_ENTIRE_TIMELINE,
	// 	payload: res.data
	// })
	if (statecode) {
		dispatch({
			type: GET_STATE_TIMELINE,
			payload: res.data[statecode]
		})
	}
}

export const getStateTimeLine = statecode => async dispatch => {}
