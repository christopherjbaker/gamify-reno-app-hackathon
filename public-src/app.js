import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from './layout/layout';
import Subpages from 'app-components/subpages/subpages';

import About from './pages/about/about';
import Landing from './pages/about/about';

export default class App extends Component {
	render() {
		return (
			<Layout
				navigation={[
					{ label: 'Home', to: '/landing' },
					{ label: 'About', to: '/about' },
				]}
			>
				<Subpages routes={[
					{ route: '', exact: true, render: () => (
						<Redirect to="/landing" />
					) },
					{ route: 'about', Component: About },
					{ route: 'landing', Component: Landing },
				]} />
			</Layout>
		);
	}
}
