import { USER_FETCH_REQUEST, USER_FETCH_SUCCESS, USER_FETCH_FAILURE } from './userActionsType';
import axios from 'axios';
export const userFetchRequest = () => {
	return {
		type: USER_FETCH_REQUEST,
	};
};

export const userFetchSuccess = (users) => {
	return {
		type: USER_FETCH_SUCCESS,
		payload: users,
	};
};
export const userFetchFailure = (error) => {
	return {
		type: USER_FETCH_FAILURE,
		payload: error,
	};
};

export const fetchUsers = () => {
	return (dispatch) => {
		dispatch(userFetchRequest());
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				// response.data is the users
				const users = response.data;
				dispatch(userFetchSuccess(users));
			})
			.catch((error) => {
				// error.message is the error message
				const errorMsg = error.message;
				dispatch(userFetchFailure(errorMsg));
			});
	};
};
