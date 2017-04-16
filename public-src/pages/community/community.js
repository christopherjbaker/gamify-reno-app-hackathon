import React, { Component } from 'react';
import Page from 'app-components/page/page';
import Table from 'app-components/table/table';
import Featured from './featured';

export default class Community extends Component {
	render() {
		return (
			<Page title="Community">
				<Table
					title="Top Scores"
					headers={[
						{ label: 'Team', key: 'team' },
						{ label: 'Points', key: 'points' },
						{ label: 'Accomplishments', key: 'Accomplishments' },
						{ label: 'Ranking', key: 'ranking' },
					]}
				/>
			</Page>
		);
	}
}
