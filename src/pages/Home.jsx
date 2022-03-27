import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, loadUser } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
const Home = () => {
	let dispatch = useDispatch();
	let history = useNavigate();
	const { users } = useSelector((state) => state.users);
	useEffect(() => {
		dispatch(loadUser());
	}, [dispatch]);
	const handelDelete = (id) => {
		console.log('user id', id);
		dispatch(deleteUser(id));
	};
	return (
		<React.Fragment>
			<div className=' container'>
				<div className='row'>
					<div className='col-2 offset-10 d-flex justify-content-end'>
						<button className='btn btn-primary' onClick={() => history('/add-user')}>
							Add User
						</button>
					</div>
				</div>
				<div className='row'>
					<div className='col-12'>
						<div className='table-responsive'>
							<table className='table table-striped table-hover table-bordered '>
								<thead>
									<tr>
										<th scope='col'>user Name</th>
										<th scope='col'>Address</th>
										<th scope='col'>Email</th>
										<th scope='col'>Contact</th>
										<th scope='col'>Action</th>
									</tr>
								</thead>
								<tbody>
									{users &&
										users.map((user, index) => {
											return (
												<tr key={index}>
													<th>{user.name}</th>
													<td>{user.address}</td>
													<td>{user.email}</td>
													<td>{user.contact}</td>
													<td>
														<button
															onClick={() =>
																history(`/edit-user/${user.id}`)
															}
															className='btn btn-info me-3'
														>
															Edit
														</button>
														<button
															onClick={() => handelDelete(user.id)}
															className='btn btn-danger'
														>
															Delete
														</button>
													</td>
												</tr>
											);
										})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Home;
