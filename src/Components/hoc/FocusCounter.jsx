import React, { Component } from 'react';
import withCounter from './withCounter';
const FocusCounter = (props) => {
	const { count, handelIncrement } = props;
	return (
		<React.Fragment>
			<button className='btn btn-primary me-3' onFocus={handelIncrement}>
				Focus <span className='badge bg-black'>{count}</span> times
			</button>
		</React.Fragment>
	);
};
export default withCounter(FocusCounter);
