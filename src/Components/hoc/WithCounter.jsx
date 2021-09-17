import React, { Component } from 'react';

const withCounter = (OriginalComponent) => {
	class NewComponent extends Component {
		state = {
			count: 0,
		};
		handelIncrement = () => {
			this.setState({
				count: this.state.count + 1,
			});
		};
		render() {
			const { count } = this.state;
			return <OriginalComponent count={count} handelIncrement={this.handelIncrement} />;
		}
	}

	return NewComponent;
};

export default withCounter;
