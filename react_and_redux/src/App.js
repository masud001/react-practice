import logo from "./logo.svg";
import "./App.css";
import Posts from "./Components/Posts";
import PostForm from "./Components/PostForm";
import { Provider } from "react-redux";
import store from "./Store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<hr />
					<PostForm />
					<hr />
					<Posts />
				</header>
			</div>
		</Provider>
	);
}

export default App;
