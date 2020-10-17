import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Layout from './layouts/Layout';

const App = () => {
	return (
		<Router>
			<Layout>
				<Route exact path='/' render={(props) => <Home {...props} />} />
				<Route exact path='/about' render={(props) => <About {...props} />} />
				<Route exact path='/login' render={(props) => <Login {...props} />} />
			</Layout>
		</Router>
	);
};

export default App;
