import { combineReducers } from 'redux';
import posts from '../../pages/Posts/reducer';
import users from '../../pages/Users/reducer';
import todos from '../../pages/Todos/reducer';
import loading from './loading';
const rootReducers = combineReducers({
	posts,
	loading,
	users,
	todos
});

export default rootReducers;
