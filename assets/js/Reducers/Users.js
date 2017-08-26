function Users(state = [], action) {
	
	let newState = state.slice(0);
	
	switch(action.type) {
		case 'ADD_USER': 
			newState.push(action.user);
		default: return newState;
	}

}

export default Users;