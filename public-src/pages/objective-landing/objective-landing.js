import styles from './objective-landing.scss';

import React, { Component } from 'react';
import Page from 'app-components/page/page';
import Category from 'app-components/category/category';
import Table from 'app-components/table/table';
import { Link } from 'react-router-dom';

export default class ObjectiveLanding extends Component {
	render() {
		return (
			<Page title="Objectives">
				<section className="about about-three padding-120">
					<div className="container">
						<div className="row">
							<div className="col-md-12 col-sm-12 col-xs-12">
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
								<Link to='/objectives/perform'>
									<Category
										color='red'
										title='Perform'
									/>
								</Link>
							
								<Link to='/objectives/travel'>
									<Category
										color='blue'
										title='Travel'
									/>
								</Link>
								
								<Link to='/objectives/create'>
									<Category
										color='brown'
										title='Create'
									/>
								</Link>
								
								<Link to='/objectives/help'>
									<Category
										color='purple'
										title='Help'
									/>
								</Link>
								
								<Link to='/objectives/buy'>
									<Category
										color='black'
										title='Buy'
									/>
								</Link>
							</div>
						</div>
					</div>
				</section>
			</Page>
		);
	}
}
