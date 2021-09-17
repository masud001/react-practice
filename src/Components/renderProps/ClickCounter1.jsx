import React, { Component } from 'react';

export default class ClickCounter1 extends Component {
	render() {
		const { count, counterIncrement } = this.props;
		return (
			<React.Fragment>
				<button className='btn btn-primary me-3' onClick={counterIncrement}>
					Click Counter
					<span className='badge bg-black p-2 ms-2 '> {count} </span>
				</button>
			</React.Fragment>
		);
	}
}
