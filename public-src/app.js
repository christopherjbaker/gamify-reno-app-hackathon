import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from './layout/layout';
import Subpages from 'app-components/subpages/subpages';

import Landing from './pages/landing/landing';
import Objectives from './pages/objectives/objectives';

export default class App extends Component {
	render() {
		return (
			<Layout
				navigation={[
					{ label: 'Home', to: '/landing' },
					{ label: 'About', to: '/about', children: [
						{ label: 'About 1', to: '/about/1' },
						{ label: 'About 2', to: '/about/2' },
					] },
					{ label: 'Objectives', to: '/objectives' },
				]}
			>
				<Subpages index="/landing" routes={[
					{ route: 'landing', Component: Landing },
					{ route: 'objectives', Component: Objectives },
				]} />
			</Layout>
		);
	}
}
