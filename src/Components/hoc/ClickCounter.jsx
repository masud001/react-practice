import React, { Component } from 'react';
import withCounter from './withCounter';
const ClickCounter = (props) => {
	const { count, handelIncrement } = props;
	return (
		<React.Fragment>
			<button className='btn btn-primary me-3' onClick={handelIncrement}>
				Click <span className='badge bg-black'>{count}</span> times
			</button>
		</React.Fragment>
	);
};

export default withCounter(ClickCounter);
