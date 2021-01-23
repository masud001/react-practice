import "./App.css";
import StateAndProps from "./Components/state-and-props/StateAndProps";

function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<StateAndProps name="Masud" age="25" address="Dhaka" />
						<StateAndProps
							name="Dollar"
							age="30"
							address="Madhnagar"
						/>
						<StateAndProps
							name="Muhammad"
							age="21"
							address="Madhnagar"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
