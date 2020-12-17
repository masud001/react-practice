import React from "react";
import "./App.css";

// importing components

import Forms from "./components/Forms";
import TodoLists from "./components/TodoLists";

function App() {
	return (
		<div className="App">
			<header>
				<h1>😺-Masudur Todo List😃</h1>
			</header>
			<Forms />
			<TodoLists />
		</div>
	);
}

export default App;
