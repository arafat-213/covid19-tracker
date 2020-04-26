import React from 'react'
import { Link } from 'react-router-dom'
const Header = props => {
	return (
		<div>
			<nav className="nav justify-content-center">
				<div data-aos="fade-down-right" data-aos-duration="1000">
					<h5 className="nav-link nav-brand">Covid19 Tracker</h5>
				</div>
				<Link className="nav-link" to="/covid19-tracker/global">
					Global
				</Link>
				<Link className="nav-link" to="/covid19-tracker">
					India
				</Link>
			</nav>
		</div>
	)
}

export default Header
