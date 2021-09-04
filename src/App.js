import React, { Component } from 'react';
import ClickCounter from './Components/renderProps/ClickCounter';
import HoverCounter from './Components/renderProps/HoverCounter';
import Counter from './Components/renderProps/Counter';
import { User } from './Components/User';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='App'>
					<div className='container'>
						<h1 className=' text-capitalize '>Higher-Order Components render props</h1>
						<hr />
						{/* <ClickCounter />
						<HoverCounter /> */}
						{/* <ClickCounter /> */}
						{/* <HoverCounter /> */}
						<hr />
						{/* <User render={(isLogin) => (isLogin ? 'Masudur Rahman' : 'Guest User')} /> */}
						<Counter>
							{(count, counterIncrement) => (
								<ClickCounter count={count} counterIncrement={counterIncrement} />
							)}
						</Counter>
						<Counter>
							{(count, counterIncrement) => (
								<HoverCounter count={count} counterIncrement={counterIncrement} />
							)}
						</Counter>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
