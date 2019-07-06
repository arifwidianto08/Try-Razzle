import { TODOS_FETCHED } from './constant';

export function getData() {
	return async dispatch => {
		dispatch({ type: 'LOADING' });
		const res = await fetch('https://jsonplaceholder.typicode.com/todos');
		const todos = await res.json();

		try {
			dispatch({ type: TODOS_FETCHED, payload: todos });
			dispatch({ type: 'DONE_LOADING' });
			return todos;
		} catch (error) {
			dispatch({ type: 'DONE_LOADING' });
			return [];
		}
	};
}
