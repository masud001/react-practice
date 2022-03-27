import * as types from './actionsType';
import axios from 'axios';

const getUsers = (users) => ({
	type: types.GET_USER,
	payload: users,
});
const userDelete = () => ({
	type: types.DELETE_USER,
});
const userAdded = () => ({
	type: types.ADD_USER,
});
const userUpdated = () => ({
	type: types.UPDATE_USER,
});
const getUser = (user) => ({
	type: types.GET_SINGLE_USER,
	payload: user,
});

export const loadUser = () => {
	return (dispatch) => {
		axios
			.get(`${process.env.REACT_APP_API}`)
			.then((res) => {
				dispatch(getUsers(res.data));
			})
			.catch((error) => {
				dispatch(getUsers(error.message));
			});
	};
};
export const deleteUser = (id) => {
	return (dispatch) => {
		axios
			.delete(`${process.env.REACT_APP_API}/${id}`)
			.then(() => {
				dispatch(userDelete());
				dispatch(loadUser());
			})
			.catch((error) => {
				dispatch(userDelete());
			});
	};
};
export const addUser = (user) => {
	return (dispatch) => {
		axios
			.post(`${process.env.REACT_APP_API}`, user)
			.then(() => {
				dispatch(userAdded());
				dispatch(loadUser());
			})
			.catch((error) => {
				dispatch(userAdded());
			});
	};
};

// edit user
export const getSingleUser = (id) => {
	return (dispatch) => {
		axios
			.get(`${process.env.REACT_APP_API}/${id}`)
			.then((res) => {
				console.log('Edit user :', res.data);
				dispatch(getUser(res.data));
			})
			.catch((error) => {
				dispatch(userDelete());
			});
	};
};
// update user
export const updateUser = (user, id) => {
	return (dispatch) => {
		axios
			.put(`${process.env.REACT_APP_API}/${id}`, user)
			.then((res) => {
				console.log('Edit user :', res.data);
				dispatch(userUpdated());
			})
			.catch((error) => {
				dispatch(userUpdated());
			});
	};
};
