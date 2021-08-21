import React, { Component } from 'react';
import Calculator from './Components/Calculator';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='App'>
					<div className='container'>
						<h1 className=' text-capitalize '>Lifting State Up</h1>
						<hr />
						<Calculator />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
