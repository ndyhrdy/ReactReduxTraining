import UsersApi from '../Api/Users'
import {
	ADD_USER,
	POPULATE_USERS
} from './Types'

export const addUser = user => {
	return {
		type: ADD_USER,
		user
	};
}

export const loadUsers = () => {
	return function (dispatch) {
		return UsersApi.get().then(users => {
			dispatch(populateUsers(users));
		}).catch(error => {
			throw(error);
		});
	};
}

export const populateUsers = users => {
	return {
		type: POPULATE_USERS,
		users
	};
}