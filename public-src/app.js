import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from './layout/layout';
import Subpages from 'app-components/subpages/subpages';

import Landing from './pages/landing/landing';

export default class App extends Component {
	render() {
		return (
			<Layout
				navigation={[
					{ label: 'Home', to: '/landing' },
				]}
			>
				<Subpages routes={[
					{ route: '', exact: true, render: () => (
						<Redirect to="/landing" />
					) },
					{ route: 'landing', Component: Landing },
				]} />
			</Layout>
		);
	}
}
