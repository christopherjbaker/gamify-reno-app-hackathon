import React, { Component } from 'react';
import Layout from './layout/layout';
import Subpages from 'app-components/subpages/subpages';

import Community from './pages/community/community';
import Landing from './pages/landing/landing';
import Accomplishment from './pages/Accomplishment/Accomplishment';
import AccomplishmentList from './pages/accomplishment-list/accomplishment-list';
import Objective from './pages/objective/objective';
import ObjectiveSubmit from './pages/objective-submit/objective-submit';
import ObjectiveList from './pages/objective-list/objective-list';
import ObjectiveLanding from './pages/objective-landing/objective-landing';
import User from './pages/user/user';
import UserList from './pages/user-list/user-list';

export default class App extends Component {
	render() {
		return (
			<Layout
				navigation={[
					{ label: 'Home', to: '/landing' },
					{ label: 'Objectives', to: '/objectives' },
					{ label: 'Accomplishments', to: '/accomplishments' },
					{ label: 'Community', to: '/community' },
					{ label: 'Users', to: '/users' },

				]}
			>
				<Subpages index="/landing" routes={[
					{ route: 'landing', Component: Landing },
					{ route: 'community', Component: Community },
					{ route: 'accomplishments', Component: AccomplishmentList, exact: true },
					{ route: 'accomplishment/:id', Component: Accomplishment },
					{ route: 'objectives', Component: ObjectiveLanding, exact: true },
					{ route: 'objective-submit', Component: ObjectiveSubmit, exact: true },
					{ route: 'objectives/:category', Component: ObjectiveList },
					{ route: 'objective/:id', Component: Objective },
					{ route: 'users', Component: UserList, exact: true },
					{ route: 'user/:id', Component: User },
				]} />
			</Layout>
		);
	}
}
