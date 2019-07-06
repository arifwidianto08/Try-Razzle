import { TODOS_FETCHED, DELETE_TODOS } from './constant';
const initalState = {
	todos: []
};

function reducer(state = initalState, action) {
	switch (action.type) {
		case TODOS_FETCHED:
			return {
				...state,
				todos: action.payload
			};
		case DELETE_TODOS:
			const filterredTodos = state.todos.filter(
				todo => todo.id !== action.payload
			);
			return {
				...state,
				todos: filterredTodos
			};

		default:
			return state;
	}
}

export default reducer;
