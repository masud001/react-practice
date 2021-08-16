import React, { Component } from "react";
import Clock from './Components/Clock'
class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="App">
					<Clock/>
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

