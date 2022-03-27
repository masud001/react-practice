import { combineReducers } from 'redux';
import userReducer from './reducer';
const rootReducers = combineReducers({
	users: userReducer,
});

export default rootReducers;
