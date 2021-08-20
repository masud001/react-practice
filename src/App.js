import React, { Component } from 'react';
import ClockList from './Components/ClockList';
class App extends Component {
	render() {
		console.log('this is App component');
		const quantity = [1, 2, 3, 4];
		return (
			<React.Fragment>
				<div className='App'>
					<ClockList quantity={quantity} />
				</div>
			</React.Fragment>
		);
	}
}

// functional components
// ----------------------

// function App({locale}) {
// 	return (
// 		<React.Fragment>
// 			<div className="App">
// 				<div className="container">
// 					<h1>Hello <span className=" badge bg-danger">React </span> </h1>
// 					<h1>Today's Date is :
// 						<span className=" badge badge-dark ">
// 							{new Date().toLocaleTimeString(locale)}
// 						</span>
// 					</h1>
// 				</div>
// 			</div>
// 		</React.Fragment>
// 	)
// }

export default App;
