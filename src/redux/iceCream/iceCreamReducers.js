import { BUY_ICE_CREAM } from './iceCreamActionsType';
const iceCreamState = {
	numberOfIceCream: 7,
};
const iceCreamReducer = (state = iceCreamState, action) => {
	switch (action.type) {
		case BUY_ICE_CREAM:
			return {
				...state,
				numberOfIceCream: state.numberOfIceCream - 1,
			};
		default:
			return state;
	}
};

export default iceCreamReducer;
