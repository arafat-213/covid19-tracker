import React from 'react'
import { Link } from 'react-router-dom'
const Header = props => {
	return (
		<div>
			<div data-aos="fade-down-right" data-aos-duration="1000">
				<h1 className="diplay-3">Covid19 Tracker</h1>
			</div>
			{/* <nav className="nav justify-content-center">
				<Link className="nav-link" to="/covid19-tracker/globalTracker">
					Global
				</Link>
				<Link className="nav-link" to="/covid19-tracker">
					India
				</Link>
			</nav> */}
		</div>
	)
}

export default Header
