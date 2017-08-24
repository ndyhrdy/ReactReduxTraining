import { combineReducers } from 'redux'

import Users from './Users'

const RootReducer = combineReducers({
	users: Users
});
export default RootReducer;