import React from 'react'
import { useLocation } from 'react-router-dom'

const GloablTable = props => {
	return <p>Global table{useLocation().pathname}</p>
}
export default GloablTable
