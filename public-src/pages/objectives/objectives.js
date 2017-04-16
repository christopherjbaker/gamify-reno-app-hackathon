import styles from './objectives.scss';

import React, { Component } from 'react';
import Page from 'app-components/page/page';
import Category from 'app-components/category/category';
import Table from 'app-components/table/table';

export default class Objectives extends Component {
	render() {
		return (
			<Page title="Objectives">
				<section className="banner-three">
					<div className="banner-overlay">
						<div className="container">
							<div className="banner-content">
								<Table
									className={ styles.nearby }
									title='Nearby'
									headers={[
										{ label: 'Objective', key: 'objective' },
										{ label: 'Location', key: 'location' },
										{ label: 'Points', key: 'points' },
										{ label: 'Rating', key: 'rating' },
									]}
									data={[
										{ objective: 'Singing duet with street performer', location: 'UNR', points: '200', rating: '4.5' },
									]}
								/>
							</div>
						</div>
					</div>
				</section>

				<section className="about about-three padding-120">
					<div className="container">
						<div className="row">
							<div className="col-md-12 col-sm-12 col-xs-12">
								<Category
									color='red'
									title='Performance'
								/>
								<Category
									color='blue'
									title='Travel'
								/>
								<Category
									color='brown'
									title='Create'
								/>
								<Category
									color='purple'
									title='Help'
								/>
								<Category
									color='black'
									title='Commerce'
								/>
							</div>
						</div>
					</div>
				</section>
			</Page>
		);
	}
}
