import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, getSingleUser, updateUser } from '../redux/actions';
const EditUser = () => {
	let history = useNavigate();
	let dispatch = useDispatch();

	let { id } = useParams();
	const [state, setState] = useState({
		name: '',
		address: '',
		email: '',
		contact: '',
	});
	const { user } = useSelector((state) => state.users);
	const [error, setError] = useState('');
	const { name, address, email, contact } = state;

	useEffect(() => {
		dispatch(getSingleUser(id));
	}, [dispatch, id]);

	useEffect(() => {
		if (user) {
			setState({ ...user });
		}
	}, [user]);

	const handelInputChange = (e) => {
		let { name, value } = e.target;
		setState({ ...state, [name]: value });
	};
	const handelSubmit = (e) => {
		e.preventDefault();
		if (!name || !address || !email || !contact) {
			setError('fill up the all input field');
		} else {
			dispatch(updateUser(state, id));
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
								<h1>Edit User Form</h1>
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
												update
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

export default EditUser;
