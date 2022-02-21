import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyIceCream } from '../redux';

const HookIceCreamContainer = () => {
	const numberOfIceCream = useSelector((state) => state.iceCream.numberOfIceCream);
	const dispatch = useDispatch();
	return (
		<div>
			<h3>
				Number of Ice Cream -
				{numberOfIceCream <= 0 ? (
					<span className='badge bg-danger'>Out of stock</span>
				) : (
					<span className='badge bg-info'>{numberOfIceCream}</span>
				)}
			</h3>
			<button
				title={numberOfIceCream <= 0 ? 'out of stock' : 'buy cake'}
				className={`btn btn-outline-${
					numberOfIceCream <= 0 ? 'danger' : 'info'
				} text-capitalize`}
				onClick={() => dispatch(buyIceCream())}
				disabled={numberOfIceCream <= 0 ? true : false}
			>
				{numberOfIceCream <= 0 ? 'out of stock' : 'buy cake'}
			</button>
		</div>
	);
};

export default HookIceCreamContainer;
