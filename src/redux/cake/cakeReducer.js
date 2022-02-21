import { BUY_CAKE } from './cakeActionsType';

const initialState = {
	numberOfCake: 5,
};
// (state,action)=> newState

const cakeReducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numberOfCake: state.numberOfCake - action.payload,
			};
		default:
			return state;
	}
};
export default cakeReducer;
