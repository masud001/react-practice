import { USER_FETCH_REQUEST, USER_FETCH_SUCCESS, USER_FETCH_FAILURE } from './userActionsType';

const initialUserState = {
	loading: false,
	users: [],
	error: '',
};

const userReducers = (state = initialUserState, action) => {
	switch (action.type) {
		case USER_FETCH_REQUEST:
			return {
				...state,
				loading: true,
			};
		case USER_FETCH_SUCCESS:
			return {
				...state,
				loading: false,
				users: action.payload,
				error: '',
			};
		case USER_FETCH_FAILURE:
			return {
				...state,
				loading: false,
				users: [],
				error: action.payload,
			};
		default:
			return state;
	}
};

export default userReducers;
