import React from 'react'
import './Pages.css'
import { Link } from 'react-router-dom'

const FAQ = () => {
	return (
		<div>
			<h4 className='question'>Who are you?</h4>
			<h5 className='answer'>
				Find it out{` `}
				<Link to='/covid19-tracker/about'>here.</Link>
			</h5>

			<h4 className='question'>
				What are your sources? How is data gathered for this website
			</h4>
			<h5 className='answer'>
				I am using a crowdsourced API and they are using state bulletins
				and official handles to update the numbers. The data is
				validated by a group of volunteers and published into a Google
				sheet and an API. API is available for all at{' '}
				<a href='http://api.covid19india.org'>api.covid19india.org</a>.
				The source list is{' '}
				<a href='https://telegra.ph/Covid-19-Sources-03-19'>
					available here
				</a>
				. {` `}
				For the global data, This app is consuming{' '}
				<a href='https://covid19api.com'>this</a> API and the API is
				using official websites of various nations for gathering the
				data
			</h5>

			<h4 className='question'>
				Why does your website have more positive count than MoH?
			</h4>
			<h5 className='answer'>
				MoHFW updates the data at a scheduled time. However, this app
				updates them based on state press bulletins, official (CM,
				Health M) handles, PBI, Press Trust of India, ANI reports. These
				are generally more recent.
			</h5>

			<h4 className='question'>
				Why does case count for India does not match in 'India' and
				'Global' tab?
			</h4>
			<h5 className='answer'>
				Both tabs uses different APIs for displaying data. 'India' tab
				uses various press releases, bulletins, PIB, Press Trust of
				India (PTI), ANI reports, while data in Global tab is updated
				from official government sites only. Hence, Data in India tab is
				updated more frequently and is generally more recent.
			</h5>

			<h4 className='question'>Where can I get this coronavirus icon?</h4>
			<h5 className='answer'>
				Icon was made by{' '}
				<a
					href='https://www.flaticon.com/authors/freepik'
					title='Freepik'>
					Freepik
				</a>{' '}
				from{' '}
				<a href='https://www.flaticon.com/' title='Flaticon'>
					{' '}
					www.flaticon.com
				</a>{' '}
			</h5>
		</div>
	)
}

export default FAQ
