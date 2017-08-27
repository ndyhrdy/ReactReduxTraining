import { ADD_ROLE } from '../Actions/Types'

export default (state = [], action) => {

	let newState = state.slice(0);

	switch(action.type) {
		case ADD_ROLE:
			newState.push(action.role);

		default: return newState;

	}

}