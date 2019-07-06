const initialState = {
	isLoading: false
};

function loadingReducer(state = initialState, action) {
	switch (action.type) {
		case 'LOADING':
			return { ...state, isLoading: true };

		case 'DONE_LOADING':
			return { ...state, isLoading: false };

		default:
			return state;
	}
}

export default loadingReducer;
