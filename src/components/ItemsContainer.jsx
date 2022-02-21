import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';
const ItemsContainer = (props) => {
	return (
		<div>
			<h1>
				total items - <span>{props.itemNumber}</span>
			</h1>
			<button className='btn btn-warning' onClick={props.buyItems}>
				click to {props.cake ? 'Cake' : 'Ice Cream'}
			</button>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	const item = ownProps.cake ? state.cake.numberOfCake : state.iceCream.numberOfIceCream;

	return {
		itemNumber: item,
	};
};
const mapDispatchToProps = (dispatch, ownProps) => {
	const dispatchFunction = ownProps.cake
		? () => dispatch(buyCake())
		: () => dispatch(buyIceCream());
	return {
		buyItems: dispatchFunction,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
