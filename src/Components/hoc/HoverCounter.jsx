import React from 'react';
import withCounter from './WithCounter';
const HoverCounter = ({ count, handelIncrement }) => {
	return (
		<React.Fragment>
			<button className='btn btn-info' onMouseOver={handelIncrement}>
				Hover <span className='badge bg-dark'>{count}</span> times
			</button>
		</React.Fragment>
	);
};

export default withCounter(HoverCounter);
