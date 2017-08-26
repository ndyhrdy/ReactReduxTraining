import Thunk from 'redux-thunk'
import RootReducer from './Reducers/Index'
import { createStore, compose, applyMiddleware } from 'redux'

const defaultState = {
	users: [
		{ name: 'Endy Hardy', email: 'endy0611@gmail.com' }
	]
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
	RootReducer, 
	defaultState, 
	composeEnhancers(applyMiddleware(Thunk))
	);
export default Store;