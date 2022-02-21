import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux';

const HookCakeContainer = () => {
	const numberOfCake = useSelector((state) => state.cake.numberOfCake);
	const dispatch = useDispatch();
	return (
		<div>
			<h3>
				Number of cake -
				{numberOfCake <= 0 ? (
					<span className='badge bg-danger'>Out of stock</span>
				) : (
					<span className='badge bg-info'>{numberOfCake}</span>
				)}
			</h3>
			<button
				onClick={() => dispatch(buyCake())}
				className='btn btn-outline-info text-capitalize'
				disabled={numberOfCake <= 0 ? true : false}
			>
				{numberOfCake <= 0 ? 'out of stock' : 'buy cake'}
			</button>
		</div>
	);
};

export default HookCakeContainer;
