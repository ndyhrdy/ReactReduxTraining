import UsersApi from '../Api/Users'

export function addUser(user) {
	return {
		type: 'ADD_USER',
		user
	};
}

export function loadUsers() {
	return function (dispatch) {
		return UsersApi.get().then(users => {
			dispatch(populateUsers(users));
		}).catch(error => {
			throw(error);
		});
	};
}

export function populateUsers(users) {
	return {
		type: 'POPULATE_USERS',
		users
	};
}