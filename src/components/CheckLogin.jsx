import React, { useState } from 'react';
import Home from './Home';
import Login from './Login';

const CheckLogin = () => {
	const [login, setlogin] = useState(false);
	return <div>{login ? <Home /> : <Login />}</div>;
};

export default CheckLogin;
