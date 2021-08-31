import React, { Component } from 'react';
import withCounter from './withCounter';
const ClickCounter = (props) => {
	const { count, incrementCount } = props;
	return (
		<div>
			<button className='btn btn-danger text-capitalize' onClick={incrementCount}>
				click <span className='badge p-2 bg-black '>{count}</span> time
			</button>
		</div>
	);
};

export default withCounter(ClickCounter);

// export default class ClickCounter extends Component {

// 	render() {
// 		const { count } = this.state;
// 		return (
// 			<div>
// 				<button className='btn btn-danger text-capitalize' onClick={this.incrementCount}>
// 					click <span className='badge p-2 bg-black '>{count}</span> time
// 				</button>
// 			</div>
// 		);
// 	}
// }
