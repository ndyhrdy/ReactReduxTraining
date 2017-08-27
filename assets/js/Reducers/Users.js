import {
	ADD_USER,
	POPULATE_USERS
} from '../Actions/Types'

export default (state = [], action) => {
	
	let newState = state.slice(0);

	switch(action.type) {
		case ADD_USER: 
			newState.push(action.user);
			return newState;

		case POPULATE_USERS:
			let newUsers = action.users.slice(0);
			newState = newUsers;

		default: return newState;
	}

}
