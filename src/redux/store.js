import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducers from './rootReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;
