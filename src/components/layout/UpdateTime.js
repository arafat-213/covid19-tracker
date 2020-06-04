import React from 'react'

const UpdateTime = ({ time }) => (
	<h6 className='float-right update-time'>
		<i className='fas fa-history'></i>
		{` Last updated ${time} ago`}
	</h6>
)
export default UpdateTime
