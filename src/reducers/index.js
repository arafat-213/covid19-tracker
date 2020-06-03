import { combineReducers } from 'redux'
import global from './global'
import india from './india'
import state from './state'

export default combineReducers({ india, state, global })
