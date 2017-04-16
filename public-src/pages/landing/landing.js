import styles from './landing.scss';
import API from 'app-api/objective';

import React, { Component } from 'react';
import Category from 'app-components/category/category';
import Table from 'app-components/table/table';
import Page from 'app-components/page/page';
import BigNumber from 'app-components/big-number/big-number';

export default class Landing extends Component {
	constructor() {
		super();

		this.state = {
			nearby: null,
		};
	}

	async componentWillMount() {
		let nearby = await API.search();

		this.setState({ nearby });
	}
	
	render() {
		return (
			<Page>
				<section className="banner-seven">
					<div className="banner-overlay">
						<div className="container" style={{ paddingTop: '15rem' }}>
							<div>
								<div className="row">
									<div className="col-md-6 col-sm-12 col-xs-12">
										<BigNumber
											amount={10}
											category='accomplishments'
										/>
									</div>
									<div className="col-md-6 col-sm-12">
										<BigNumber
											className={ styles.numRight }
											amount={270}
											category='points'
										/>
									</div>
								</div>
								<div className="row">
									<div className="col-md-12 col-sm-12 col-xs-12">
										<section className='pricing pricing-three'>
											<div>
												<div className="container">
													<div className="pricing-items">
														<div className="row">
															<div className="col-md-12 col-sm-12 col-xs-12">
																<div className="pricing-item">
																	<div className="pricing-header">
																		<h2 className='amount' style={{ fontSize: '4rem' }}>Task of the Day</h2>
																	</div>
																	<div className='pricing-options' style={{ transform: 'translateY(100%)' }}>
																		<div>
																			<p>Available Points<span style={{ backgroundColor: 'white', color: 'black', fontSize: '2rem', marginRight: '10rem', textAlign: 'left' }}>150</span></p>
																		</div>
																	</div>
																	<div className="pricing-button">
																		<a href="#">ticket now</a>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</section>
									</div>
								</div>
								<div className="row" style={{ paddingTop: '5rem' }}>
									<div className="col-md-12 col-sm-12 col-xs-12">
										{ this.state.nearby ? (
											<Table
												className={ styles.nearby }
												title="Nearby Tasks"
												headers={[
													{ label: 'Title', key: 'title' },
													{ label: 'Points', key: 'points' },
												]}
												data={ this.state.nearby }
											/>
										) : null }
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Page>
		);
	}
}
