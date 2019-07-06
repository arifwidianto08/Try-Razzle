import { USERS_FETCHED, DELETE_USERS } from './constant';
const initalState = {
	users: []
};

function reducer(state = initalState, action) {
	switch (action.type) {
		case USERS_FETCHED:
			return {
				...state,
				users: action.payload
			};
		case DELETE_USERS:
			const filterredUsers = state.users.filter(
				user => user.id !== action.payload
			);
			return {
				...state,
				users: filterredUsers
			};

		default:
			return state;
	}
}

export default reducer;
