import { USER_FETCH_REQUEST, USER_FETCH_SUCCESS, USER_FETCH_FAILURE } from './userActionsType';

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
