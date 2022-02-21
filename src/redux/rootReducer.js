import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducers';
import userReducers from './user/userReducer';
const rootReducers = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
	user: userReducers,
});

export default rootReducers;
