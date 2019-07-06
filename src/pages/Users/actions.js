import { USERS_FETCHED } from './constant';

export function getData() {
	return async dispatch => {
		dispatch({ type: 'LOADING' });
		const res = await fetch('https://jsonplaceholder.typicode.com/users');
		const users = await res.json();

		try {
			dispatch({ type: USERS_FETCHED, payload: users });
			dispatch({ type: 'DONE_LOADING' });
			return users;
		} catch (error) {
			dispatch({ type: 'DONE_LOADING' });
			console.error(new Error(`${error}`));
			return [];
		}
	};
}
