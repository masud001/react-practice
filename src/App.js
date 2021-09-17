import React, { Component } from 'react';
import ClickCounter from './Components/hoc/ClickCounter';
import HoverCounter from './Components/hoc/HoverCounter';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='App'>
					<div className='container'>
						<h1 className=' text-capitalize '>Higher-Order Components</h1>
						<hr />
						<ClickCounter />
						<HoverCounter />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
