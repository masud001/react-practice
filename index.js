const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
// redux-logger middleware
const logger = reduxLogger.createLogger();

// action
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CERAM = 'BUY_ICE_CERAM';
// action creators
function buyCake() {
	return {
		type: BUY_CAKE,
		info: 'this is first redux action',
	};
}

function buyIceCream() {
	return {
		type: 'BUY_ICE_CERAM',
		info: 'this is second redux action',
	};
}

const initialCakeState = {
	numOfCakes: 10,
};
const initialIceCreamState = {
	numOfIceCreams: 20,
};

// (previousState,action)=>newState
const reducerCake = (state = initialCakeState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - 1,
			};

		default:
			return state;
	}
};
const reducerIceCream = (state = initialIceCreamState, action) => {
	switch (action.type) {
		case BUY_ICE_CERAM:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams - 1,
			};

		default:
			return state;
	}
};

const rootReducers = combineReducers({
	cake: reducerCake,
	iceCream: reducerIceCream,
});

const store = createStore(rootReducers, applyMiddleware(logger));
const unsubscribe = store.subscribe(() => {});

// buy cake
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

// buy ice-cream
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
