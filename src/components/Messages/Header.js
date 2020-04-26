import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
const Header = props => {
	return (
		<div>
			<nav className="nav justify-content-center">
				<div data-aos="fade-down-right" data-aos-duration="1000">
					<h5 className="nav-link nav-brand">Covid19 Tracker</h5>
				</div>
				<NavLink
					className="nav-link"
					activeClassName="active"
					exact
					to="/covid19-tracker">
					India
				</NavLink>
				<NavLink
					className="nav-link"
					activeClassName="active"
					exact
					to="/covid19-tracker/global">
					Global
				</NavLink>
			</nav>
		</div>
	)
}

export default Header
