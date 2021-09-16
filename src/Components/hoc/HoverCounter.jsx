import React, { Component } from 'react';
import withCounter from './withCounter';
const HoverCounter = (props) => {
	const { count, handelIncrement } = props;
	return (
		<React.Fragment>
			<button className='btn btn-primary me-3' onMouseOver={handelIncrement}>
				Hover <span className='badge bg-black'>{count}</span> times
			</button>
		</React.Fragment>
	);
};
export default withCounter(HoverCounter);
