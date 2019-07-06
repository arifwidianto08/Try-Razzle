import { POSTS_FETCHED } from './constant';

export function getData() {
	return async dispatch => {
		dispatch({ type: 'LOADING' });
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		const posts = await res.json();

		try {
			dispatch({ type: POSTS_FETCHED, payload: posts });
			dispatch({ type: 'DONE_LOADING' });
			return posts;
		} catch (error) {
			dispatch({ type: 'DONE_LOADING' });
			console.error(new Error(`${error}`));
			return [];
		}
	};
}
