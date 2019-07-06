import { POSTS_FETCHED, DELETE_POSTS } from './constant';
const initalState = {
	posts: []
};

function reducer(state = initalState, action) {
	switch (action.type) {
		case POSTS_FETCHED:
			return {
				...state,
				posts: action.payload
			};
		case DELETE_POSTS:
			const filterredPosts = state.posts.filter(
				post => post.id !== action.payload
			);
			return {
				...state,
				posts: filterredPosts
			};

		default:
			return state;
	}
}

export default reducer;
