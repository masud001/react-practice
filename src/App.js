import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Other from './pages/Other';
function App() {
	return (
		<React.Fragment>
			<div className='text-center'>
				<h1 className='text-capitalize'>
					react-redux <span className='badge bg-info text-uppercase'>crud</span>
				</h1>
				<hr />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='add-user' element={<AddUser />} />
					<Route path='edit-user/:id' element={<EditUser />} />
					<Route path='other' element={<Other />} />
				</Routes>
			</div>
		</React.Fragment>
	);
}

export default App;
