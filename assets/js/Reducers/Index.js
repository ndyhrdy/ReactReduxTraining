import { combineReducers } from 'redux'

import users from './Users'
import roles from './Roles'

const RootReducer = combineReducers({
	users, roles
});
export default RootReducer;