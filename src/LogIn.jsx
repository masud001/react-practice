import React, { useState } from 'react';

const LogIn = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<React.Fragment>
			<div className='card-body'>
				<h5 class='card-title text-center text-capitalize text-black border-bottom pb-4'>
					login form
				</h5>
				<form action=''>
					<div class='mb-3'>
						<label for='name' class='form-label'>
							Name
						</label>
						<input
							type='text'
							class='form-control'
							id='name'
							value={name}
							placeholder='Ex: Enter Name'
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
					</div>
					<div class='mb-3'>
						<label for='email' class='form-label'>
							Email
						</label>
						<input
							type='email'
							class='form-control'
							id='email'
							value={email}
							placeholder='Ex: example@gmail.com'
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</div>
					<div class='mb-3 '>
						<label class='form-label' for='password'>
							Password
						</label>
						<input
							type='password'
							class='form-control'
							id='password'
							value={password}
							placeholder='Ex: ******'
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</div>
					<button type='submit' class='btn btn-primary'>
						Submit
					</button>
				</form>
			</div>
		</React.Fragment>
	);
};

export default LogIn;
