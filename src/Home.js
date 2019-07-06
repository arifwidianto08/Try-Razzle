import React from 'react';
import Link from 'react-router-dom/Link';
import logo from './react.svg';
import './Home.css';

class Home extends React.Component {
	getTopSeller = async () => {
		const res = await fetch(
			'https://asia-east2-tumbasin-production.cloudfunctions.net/api/top_sellersCached'
		);
		return res.json();
	};

	getBrands = async () => {
		const res = await fetch(
			'https://asia-east2-tumbasin-production.cloudfunctions.net/api/brandsCached'
		);
		return res.json();
	};

	getProducts = async () => {
		const res = await fetch(
			'https://asia-east2-tumbasin-production.cloudfunctions.net/api/productsCached?featured=true'
		);
		return res.json();
	};

	async componentDidMount() {
		console.log('sebelum', new Date(Date.now()));

		const topSeller = this.getTopSeller();
		const brands = this.getBrands();
		const products = this.getProducts();

		const [topSellerData, brandsData, productsData] = await Promise.all([
			topSeller,
			brands,
			products
		]);
		try {
			console.log(topSellerData);
			console.log(brandsData);
			console.log(productsData);
			console.log('sesudah', new Date(Date.now()));
		} catch (error) {
			console.error(`${error}`);
		}
	}

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
