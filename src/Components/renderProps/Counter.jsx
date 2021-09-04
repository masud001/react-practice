import React, { Component } from 'react';

export default class Counter extends Component {
	state = {
		count: 0,
	};
	counterIncrement = () => {
		this.setState((preState) => ({
			count: preState.count + 1,
		}));
	};
	render() {
		const { children } = this.props;
		const { count } = this.state;
		return children(count, this.counterIncrement);
	}
}
