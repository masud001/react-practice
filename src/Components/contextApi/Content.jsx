import React from 'react';
import Counter from '../renderProps/Counter';
import HoverCounter from '../renderProps/HoverCounter';
export default function Content({ theme }) {
	return (
		<React.Fragment>
			<h1>this is a content component</h1>
			<Counter>
				{(count, counterIncrement) => (
					<HoverCounter count={count} counterIncrement={counterIncrement} theme={theme} />
				)}
			</Counter>
		</React.Fragment>
	);
}
