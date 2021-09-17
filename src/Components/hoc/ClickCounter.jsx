import React from 'react';
import withCounter from './WithCounter';
const ClickCounter = ({ count, handelIncrement }) => {
	return (
		<React.Fragment>
			<button className='btn btn-info ms-2 me-2' onClick={handelIncrement}>
				Click <span className='badge bg-danger'>{count}</span> times
			</button>
		</React.Fragment>
	);
};
export default withCounter(ClickCounter);
