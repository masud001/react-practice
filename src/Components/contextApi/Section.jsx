import React from 'react';
import Content from './Content';

export default function Section({ theme }) {
	return (
		<React.Fragment>
			<h1>This is Section</h1>
			<Content theme={theme} />
		</React.Fragment>
	);
}
