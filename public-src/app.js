import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from './layout/layout';
import Subpages from 'app-components/subpages/subpages';

import Landing from './pages/landing/landing';
import Objectives from './pages/objectives/objectives';
import Accomplishments from './pages/accomplishments/accomplishments';
import Community from './pages/community/community';
import Accomplishment from './pages/Accomplishment/Accomplishment';
import Users from './pages/users/users';
import User from './pages/user/user';

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
					{ route: 'objectives', Component: Objectives },
                    { route: 'accomplishments', Component: Accomplishments},
                    { route: 'community', Component: Community},
                    { route: 'accomplishment', Component: Accomplishment},
                    { route: 'users', Component: Users},
                    { route: 'user', Component: User},
				]} />
			</Layout>
		);
	}
}
