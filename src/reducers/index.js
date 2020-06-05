import { combineReducers } from 'redux'
import global from './global'
import india from './india'
import timeline from './timeline'
import notification from './notification'

export default combineReducers({ india, timeline, global, notification })
