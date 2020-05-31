import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
	return (
		<div>
			<h4>
				Looks like you took a wrong turn, Mate! Here's your way to
				<NavLink to='/covid19-tracker' exact>
					{` `}Home
				</NavLink>
			</h4>
		</div>
	)
}

export default NotFound
