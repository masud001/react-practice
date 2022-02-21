import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';
const NewCakeContainer = (props) => {
	const [number, setNumber] = useState(1);

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
			<div className=' d-flex justify-content-start '>
				<input
					readOnly={props.numberOfCake <= 0 ? true : false}
					className='form-control w-25'
					type='text'
					value={number}
					onChange={(e) => setNumber(e.target.value)}
				/>
				<button
					title={props.numberOfCake <= 0 ? 'out of stock' : 'buy cake'}
					className='btn btn-outline-info text-capitalize'
					onClick={() => props.buyCake(number)}
					disabled={props.numberOfCake <= 0 ? true : false}
				>
					{props.numberOfCake <= 0 ? (
						<React.Fragment>
							<span>out of stock</span>
							<span className=' badge bg-dark'>{number}</span>
						</React.Fragment>
					) : (
						<React.Fragment>
							<span>buy cake </span>
							<span className=' badge bg-dark'>{number}</span>
						</React.Fragment>
					)}
				</button>
			</div>
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
		buyCake: (number) => dispatch(buyCake(number)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
