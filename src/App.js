import React, { Component } from 'react';
import Forms from './Components/Forms';
class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='App'>
					<div className='container'>
						<h1 className=' text-capitalize '>Forms validation</h1>
						<hr />
						<Forms />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
