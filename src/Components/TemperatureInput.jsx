import React from 'react';

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit',
};

export default function TemperatureInput({ temperature, scale, onTemperatureChange }) {
	return (
		<fieldset className=' mb-3 '>
			<label className=' mb-2 '>
				Enter temperature in{' '}
				<span className=' badge bg-primary text-uppercase p-2'>{scaleNames[scale]}</span>
			</label>
			<input
				type='text'
				className='form-control'
				value={temperature}
				onChange={(e) => onTemperatureChange(e, scale)}
			/>
		</fieldset>
	);
}

// export default class TemperatureInput extends Component {
// 	render() {
// 		const { temperature, scale, onTemperatureChange } = this.props;
// 		return (
// 			<div>
// 				<fieldset className=' mb-3 '>
// 					<label className=' mb-2 '>
// 						Enter temperature in{' '}
// 						<span className=' badge bg-primary text-uppercase p-2'>
// 							{scaleNames[scale]}
// 						</span>
// 					</label>
// 					<input
// 						type='text'
// 						className='form-control'
// 						value={temperature}
// 						onChange={onTemperatureChange}
// 					/>
// 				</fieldset>
// 			</div>
// 		);
// 	}
// }
