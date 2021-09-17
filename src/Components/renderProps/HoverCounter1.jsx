import React, { Component } from 'react';

export default class HoverCounter1 extends Component {
	render() {
		const { count, counterIncrement } = this.props;
		return (
			<React.Fragment>
				<button className='btn btn-secondary mx-1' onMouseOver={counterIncrement}>
					Hover Counter
					<span className='badge bg-black p-2 ms-2 '> {count} </span>
				</button>
			</React.Fragment>
		);
	}
}
