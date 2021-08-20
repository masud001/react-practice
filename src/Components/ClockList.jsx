import React, { Component } from 'react';
import Clock from './Clock';

export default class ClockList extends Component {
	render() {
		const { quantity } = this.props;
		return (
			<React.Fragment>
				<ul>
					{quantity.map((item) => (
						<li className='clock__list' key={item}>
							<Clock />
						</li>
					))}
				</ul>
			</React.Fragment>
		);
	}
}

// export default function ClockList({ quantity = [] }) {
// 	return (
// 		<div>
// 			{quantity.map(() => (
// 				<Clock />
// 			))}
// 		</div>
// 	);
// }
