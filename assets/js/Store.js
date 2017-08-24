import { createStore, compose } from 'redux'
import RootReducer from './Reducers/Index'

const defaultState = {
	users: [
		{ name: 'Endy Hardy', email: 'endy0611@gmail.com' }
	]
};

const Store = createStore(RootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default Store;