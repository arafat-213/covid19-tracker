import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

const Notifications = ({ notifications }) => {
	return notifications.map(notification => (
		<div key={notification.timestamp} className='mb-1'>
			<li className='list-group-item p-2, pb-0 mb-0 alert alert-info'>
				<p className='mb-0 text-muted pb-0'>
					&#8226; about{' '}
					{moment
						.duration(
							moment().diff(moment.unix(notification.timestamp))
						)
						.humanize()}{' '}
					ago
				</p>
				<p className=''>{notification.update}</p>
			</li>
		</div>
	))
}

const mapStateToProps = (state, ownProps) => {
	return {
		notifications: state.notification.notifications
	}
}

export default connect(mapStateToProps)(Notifications)
