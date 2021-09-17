import React, { Component } from 'react';

export default class HoverCounter extends Component {
	render() {
		const { count, counterIncrement, theme } = this.props;
		const style = theme === 'dark' ? 'dark' : null;
		return (
			<React.Fragment>
				<button className={`btn mx-1 btn-${style}`} onMouseOver={counterIncrement}>
					Hover Counter
					<span className='badge bg-black p-2 ms-2 '> {count} </span>
				</button>
			</React.Fragment>
		);
	}
}
