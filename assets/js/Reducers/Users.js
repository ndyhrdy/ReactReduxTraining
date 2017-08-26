function Users(state = [], action) {
	
	let newState = state.slice(0);
	console.log(newState);

	switch(action.type) {
		case 'ADD_USER': 
			newState.push(action.user);
			return newState;

		case 'POPULATE_USERS':
			let newUsers = action.users.slice(0);
			newState = newUsers;

		default: return newState;
	}

}

export default Users;