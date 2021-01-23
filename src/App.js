import "./App.css";
import Counter from "./Components/Counter/Counter";
import StateAndProps from "./Components/state-and-props/StateAndProps";
import React, { Component } from "react";

class App extends Component {
	state = {
		person: [
			{ name: "Masudur Rahman", age: "25", address: "Dhaka" },
			{ name: "Dollar", age: "35", address: "Madhnagar" },
			{ name: "Muhammad", age: "21", address: "Natore" },
		],
	};
	render() {
		return (
			<React.Fragment>
				<div className="App">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<Counter />
							</div>
						</div>
						<hr />
						<div className="row">
							<div className="col-md-12">
								{this.state.person.map((people, index) => (
									<StateAndProps
										key={index}
										name={people.name}
										age={people.age}
										address={people.address}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
// function App() {
// 	state ={}
// 	return (

// 	);
// }
