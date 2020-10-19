import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './Home';
import Posts from './pages/Posts';
import Users from './pages/Users';
import Todos from './pages/Todos';
import './App.css';

const App = () => {
     return (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/posts" component={Posts} />
		<Route exact path="/users" component={Users} />
		<Route exact path="/todos" component={Todos} />
	</Switch>
	)
};

export default App;
