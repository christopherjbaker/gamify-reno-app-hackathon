import React, { Component } from 'react';
import Page from 'app-components/page/page';
import Table from 'app-components/table/table';
import Featured from './featured';

export default class Community extends Component {
	render() {
		return (
			<Page title="Community">
				<section className="about about-three padding-120">
					<div className="container">
						<div className="row">
							<div className="col-md-12 col-sm-12 col-xs-12">
								<Table
									title="Top Scores"
									headers={[
										{ label: 'Team', key: 'team' },
										{ label: 'Points', key: 'points' },
										{ label: 'Accomplishments', key: 'Accomplishments' },
										{ label: 'Ranking', key: 'ranking' },
									]}
									data={[{key: 'team'}]}
								/>
							</div>
						</div>
					</div>
				</section>
			</Page>
		);
	}
}
