import React from 'react';
import LogIn from './LogIn';
import LogOut from './LogOut';
function App() {
	return (
		<React.Fragment>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<div className='card m-5'>
							<LogOut />
							<LogIn />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default App;
