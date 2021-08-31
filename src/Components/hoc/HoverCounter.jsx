import React, { Component } from 'react';
import withCounter from './withCounter';
export const HoverCounter = (props) => {
	const { count, incrementCount } = props;
	return (
		<div>
			<h1 onMouseOver={incrementCount} className='text-capitalize'>
				hovered <span className='badge bg-dark p-2'>{count} </span> times
			</h1>
		</div>
	);
};

export default withCounter(HoverCounter);

// export default class HoverCounter extends Component {
// 	state = {
// 		count: 0,
// 	};
// 	incrementCount = () => {
// 		this.setState(
// 			// count: this.state.count + 1,
// 			(prevState) => ({ count: prevState.count + 1 })
// 		);
// 	};
// 	render() {
// 		const { count } = this.state;
// 		return (
// 			<div>
// 				<h1 onMouseOver={this.incrementCount} className='text-capitalize'>
// 					hovered <span className='badge bg-dark p-2'>{count} </span> times
// 				</h1>
// 			</div>
// 		);
// 	}
// }
