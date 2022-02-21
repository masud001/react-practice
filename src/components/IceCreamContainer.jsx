import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';
const IceCreamContainer = (props) => {
	return (
		<div>
			<h3>
				Number of Ice Cream -
				{props.numberOfIceCream <= 0 ? (
					<span className='badge bg-danger'>Out of stock</span>
				) : (
					<span className='badge bg-info'>{props.numberOfIceCream}</span>
				)}
			</h3>
			<button
				title={props.numberOfIceCream <= 0 ? 'out of stock' : 'buy cake'}
				className={`btn btn-outline-${
					props.numberOfIceCream <= 0 ? 'danger' : 'info'
				} text-capitalize`}
				onClick={props.buyIceCream}
				disabled={props.numberOfIceCream <= 0 ? true : false}
			>
				{props.numberOfIceCream <= 0 ? 'out of stock' : 'buy cake'}
			</button>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		numberOfIceCream: state.iceCream.numberOfIceCream,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyIceCream: () => dispatch(buyIceCream()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
