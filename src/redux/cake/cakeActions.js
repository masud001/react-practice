import { BUY_CAKE } from './cakeActionsType';
export const buyCake = (number = 1) => {
	return {
		type: BUY_CAKE,
		payload: number,
		info: 'this is cake actions',
	};
};
