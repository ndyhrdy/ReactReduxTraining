import { ADD_ROLE } from './Types'

export const addRole = (role) => {
	return {
		type: ADD_ROLE,
		role
	};
}