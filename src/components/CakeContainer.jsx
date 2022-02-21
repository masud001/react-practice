import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';
const CakeContainer = (props) => {
	return (
		<div>
			<h3>
				Number of cake -
				{props.numberOfCake <= 0 ? (
					<span className='badge bg-danger'>Out of stock</span>
				) : (
					<span className='badge bg-info'>{props.numberOfCake}</span>
				)}
			</h3>
			{}
			<button
				title={props.numberOfCake <= 0 ? 'out of stock' : 'buy cake'}
				className='btn btn-outline-info text-capitalize'
				onClick={props.buyCake}
				disabled={props.numberOfCake <= 0 ? true : false}
			>
				{props.numberOfCake <= 0 ? 'out of stock' : 'buy cake'}
			</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		numberOfCake: state.cake.numberOfCake,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyCake: () => dispatch(buyCake()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
