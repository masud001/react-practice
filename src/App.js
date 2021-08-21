import React, { Component } from 'react';
import Text from './Components/Composition/Text';
import Emoji from './Components/Composition/Emoji';
class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='App'>
					<div className='container'>
						<h1 className=' text-capitalize '>Composition vs Inheritance</h1>
						<hr />
						<Emoji>{({ addEmoji }) => <Text addEmoji={addEmoji} />}</Emoji>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
