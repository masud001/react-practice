import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';
const AddUser = () => {
	let history = useNavigate();
	let dispatch = useDispatch();
	const [state, setState] = useState({
		name: '',
		address: '',
		email: '',
		contact: '',
	});
	const [error, setError] = useState('');
	const { name, address, email, contact } = state;

	const handelInputChange = (e) => {
		let { name, value } = e.target;
		setState({ ...state, [name]: value });
	};
	const handelSubmit = (e) => {
		e.preventDefault();
		if (!name || !address || !email || !contact) {
			setError('fill up the all input field');
		} else {
			dispatch(addUser(state));
			history('/');
			setError('');
		}
	};
	return (
		<React.Fragment>
			<div className='container'>
				<div className='row'>
					<div className='col-6 offset-3'>
						<div className=' card'>
							<div className=' card-body'>
								<h1>Add User Form</h1>
								{error && <h5 class=' alert alert-danger'>{error}</h5>}
								<form action='' onSubmit={handelSubmit}>
									<div class='row mb-3'>
										<div class='col'>
											<input
												type='text'
												class='form-control'
												placeholder=' name'
												value={name}
												name='name'
												onChange={handelInputChange}
											/>
										</div>
										<div class='col'>
											<input
												type='text'
												class='form-control'
												placeholder='Address'
												value={address}
												name='address'
												onChange={handelInputChange}
											/>
										</div>
									</div>
									<div class='row mb-3'>
										<div class='col'>
											<input
												type='text'
												class='form-control'
												placeholder=' Email'
												value={email}
												name='email'
												onChange={handelInputChange}
											/>
										</div>
										<div class='col'>
											<input
												type='text'
												class='form-control'
												placeholder='Contact'
												value={contact}
												name='contact'
												onChange={handelInputChange}
											/>
										</div>
									</div>
									<div class='row mb-3'>
										<div class='col'>
											<button
												onClick={() => history('/')}
												className='btn btn-primary w-100  '
											>
												back
											</button>
										</div>
										<div class='col'>
											<button className='btn btn-primary w-100' type='submit'>
												Submit
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default AddUser;
