import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import { tryConvert, toCelsius, toFahrenheit } from '../lib/converter';
export default class Calculator extends Component {
	state = {
		temperature: '',
		scale: 'c',
	};

	handelChange = (e, scale) => {
		this.setState({
			temperature: e.target.value,
			scale,
		});
	};
	render() {
		const { temperature, scale } = this.state;
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
		return (
			<React.Fragment>
				<TemperatureInput
					scale='c'
					temperature={celsius}
					onTemperatureChange={this.handelChange}
				/>
				<TemperatureInput
					scale='f'
					temperature={fahrenheit}
					onTemperatureChange={this.handelChange}
				/>
				<hr />
				<BoilingVerdict celsius={parseFloat(temperature)} />
			</React.Fragment>
		);
	}
}
