import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';
const UserContainer = ({ userData, fetchUsers }) => {
	useEffect(() => {
		fetchUsers();
	}, [fetchUsers]);

	return userData.loading ? (
		<h1>loading...</h1>
	) : userData.error ? (
		<h1>{userData.error}</h1>
	) : (
		<React.Fragment>
			<h1>User List: </h1>
			<ul className=' list-group'>
				{userData &&
					userData.users &&
					userData.users.map((user) => {
						return (
							<li className=' list-group-item' key={user.id}>
								<span className=' bg-dark badge me-3'>{user.id}</span>
								{user.name}
							</li>
						);
					})}
			</ul>
		</React.Fragment>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		userData: state.user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUsers: () => dispatch(fetchUsers()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
