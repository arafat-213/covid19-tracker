import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../../node_modules/jquery/dist/jquery.min.js'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './Header.css'

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-md navbar-light bg-faded main-nav'>
			<div className='container'>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					Menu {` `} <span className='navbar-toggler-icon'></span>
				</button>

				<div
					className='collapse navbar-collapse'
					id='navbarSupportedContent'>
					<ul className='nav navbar-nav'>
						<li
							className='nav-item'
							data-toggle='collapse'
							data-target='.navbar-collapse.show'>
							<NavLink
								className='nav-link'
								activeClassName='active'
								exact
								to='/covid19-tracker'>
								India
							</NavLink>
						</li>
						<li
							className='nav-item'
							data-toggle='collapse'
							data-target='.navbar-collapse.show'>
							<NavLink
								className='nav-link'
								activeClassName='active'
								exact
								to='/covid19-tracker/global'>
								Global
							</NavLink>
						</li>
					</ul>
					<ul className='nav navbar-nav mx-auto'>
						<li
							className='nav-item navbar-brand'
							data-aos='fade-down-right'
							data-aos-duration='1000'
							data-toggle='collapse'
							data-target='.navbar-collapse.show'>
							<h5 className='' href='#'>
								Covid-19 India tracker
							</h5>
						</li>
					</ul>
					<ul className='nav navbar-nav'>
						<li
							className='nav-item'
							data-toggle='collapse'
							data-target='.navbar-collapse.show'>
							<NavLink
								className='nav-link'
								activeClassName='active'
								exact
								to='/'>
								About Me
							</NavLink>
						</li>
						<li
							className='nav-item'
							data-toggle='collapse'
							data-target='.navbar-collapse.show'>
							<NavLink
								className='nav-link'
								activeClassName='active'
								exact
								to='/'>
								FAQ
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
