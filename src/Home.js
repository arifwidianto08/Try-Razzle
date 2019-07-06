import React from 'react';
import Link from 'react-router-dom/Link';
import logo from './react.svg';
import './Home.css';

class Home extends React.Component {
	render() {
		return (
			<div className="Home">
				<div className="Home-header">
					<img src={logo} className="Home-logo" alt="logo" />
					<h2>Welcome to Razzle</h2>
				</div>
				<p className="Home-intro">
					To get started, edit <code>src/App.js</code> or{' '}
					<code>src/Home.js</code> and save to reload.
				</p>
				<ul className="Home-resources">
					<li>
						<Link to="/posts">Posts</Link>
					</li>
					<li>
						<Link to="/users">Users</Link>
					</li>
					<li>
						<Link to="/todos">Todos</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Home;
