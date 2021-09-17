import React, { Component } from 'react';
import ClickCounter from './Components/renderProps/ClickCounter';
import Counter from './Components/renderProps/Counter';
import Section from './Components/contextApi/Section';

class App extends Component {
	state = {
		theme: 'dark',
	};
	render() {
		const { theme } = this.state;
		return (
			<React.Fragment>
				<div className='App'>
					<div className='container'>
						<h1 className=' text-capitalize '>Higher-Order Components render props</h1>
						<hr />

						<Counter>
							{(count, counterIncrement) => (
								<ClickCounter count={count} counterIncrement={counterIncrement} />
							)}
						</Counter>

						<Section theme={theme} />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
