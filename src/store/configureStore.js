import { createStore, compose, applyMiddleware } from 'redux';
import rootReducers from '../store/reducers';
import thunk from 'redux-thunk';
function configureStore(initialState) {
	const middlewares = [thunk];
	return createStore(
		rootReducers,
		initialState,
		compose(applyMiddleware(...middlewares))
	);
}

export default configureStore;
