import React from 'react'
import profile from '../../img/profile-pic.jpg'
import 'bootstrap/dist/css/bootstrap.css'
const AboutMe = () => {
	return (
		<div>
			<div className='parent'>
				<img
					src={profile}
					alt='the creator of this app'
					className='rounded-circle profile-pic'></img>
			</div>
			<div className='parent'>
				<h1 className='about-heading'>Hello, world!</h1>
			</div>
			<h5>
				My name is Arafat Tai and I am a MERN stack web developer, and
				this app is just one of the many that I have created If you
				liked my work or have any suggestion/feedback, I can be found on
				below addresses. .
			</h5>
			<span>
				{' '}
				<i className='fas fa-instagram'></i> Instagram
			</span>
			<span>Twitter</span>
			<span>LinkedIn</span>
			<span>Github</span>
		</div>
	)
}

export default AboutMe
