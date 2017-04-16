import React, { Component } from 'react';
import Layout from './layout/layout';
import Subpages from 'app-components/subpages/subpages';

import Community from './pages/community/community';
import Landing from './pages/landing/landing';
import Accomplishment from './pages/Accomplishment/Accomplishment';
import Accomplishments from './pages/accomplishments/accomplishments';
import Objective from './pages/objective/objective';
import Objectives from './pages/objectives/objectives';
import User from './pages/user/user';
import Users from './pages/users/users';

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
					{ label: 'Accomplishments', to: '/accomplishments' },
					{ label: 'Community', to: '/community' },
					{ label: 'Users', to: '/users' },

				]}
			>
				<Subpages index="/landing" routes={[
					{ route: 'landing', Component: Landing },
					{ route: 'community', Component: Community },
					{ route: 'accomplishments', Component: Accomplishments, exact: true },
					{ route: 'accomplishments/:id', Component: Accomplishment },
					{ route: 'objectives', Component: Objectives, exact: true },
					{ route: 'objectives/:id', Component: Objective },
					{ route: 'users', Component: Users, exact: true },
					{ route: 'users/:id', Component: User },
				]} />
			</Layout>
		);
	}
}
