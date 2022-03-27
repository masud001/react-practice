import React from 'react';

const LogOut = () => {
	return (
		<React.Fragment>
			<div className='card-body text-center'>
				<h5 class='card-title text-center text-capitalize text-black'>
					Welcome <span className='badge bg-info p-2'>Name</span>
				</h5>
				<button className='btn btn-dark'>logout</button>
			</div>
		</React.Fragment>
	);
};

export default LogOut;
