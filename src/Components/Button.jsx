import React, { Component } from 'react';

export default class Button extends Component {
	shouldComponentUpdate(nextProps) {
		const { change: currentChange, locale: currentLocale } = this.props;
		const { change: nextChange, locale: nextLocale } = nextProps;

		if (currentChange === nextChange && nextLocale === currentLocale) {
			return false;
		} else {
			return true;
		}
	}
	render() {
		console.log('this is Button component');
		const { changeTimeZone, locale } = this.props;
		return (
			<React.Fragment>
				<button
					onClick={() => changeTimeZone(locale)}
					className=' btn btn-dark text-capitalize'
				>
					{locale === 'bn-BD' ? 'Change to Bangla' : 'Change to English'}
				</button>
			</React.Fragment>
		);
	}
}
