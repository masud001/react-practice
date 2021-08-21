import React from 'react';

export default function BoilingVerdict({ celsius = 0 }) {
	if (celsius > 100) {
		return <h2 className='text-capitalize'>water is boiled</h2>;
	} else {
		return <h2 className='text-capitalize'>water is not boiled</h2>;
	}
}
