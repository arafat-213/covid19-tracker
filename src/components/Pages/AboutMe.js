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
				My name is Arafat Tai. I am a MERN stack web developer, and this
				app is just one of the many that I have created. If you liked my
				work or have any suggestion/feedback, Please let me know. I can
				be found on below addresses.
			</h5>
			<div className='parent'>
				<span>
					<a href='https://instagram.com/arafat_213'>
						<i className='fab fa-instagram fa-3x social-media'></i>
					</a>
				</span>
				<span>
					<a href='https://twitter.com/arafat_213'>
						<i className='fab fa-twitter-square fa-3x social-media'></i>
					</a>
				</span>
				<span>
					<a href='https://https://www.linkedin.com/in/arafat213/'>
						<i className='fab fa-linkedin fa-3x social-media'></i>
					</a>
				</span>
				<span>
					<a href='https://github.com/arafat-213'>
						<i className='fab fa-github-square fa-3x social-media'></i>
					</a>
				</span>
			</div>
		</div>
	)
}

export default AboutMe
