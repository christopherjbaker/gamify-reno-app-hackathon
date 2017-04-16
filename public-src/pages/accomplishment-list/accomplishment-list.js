import React, { Component } from 'react';
import Page from 'app-components/page/page';

export default class AccomplishmentList extends Component {
	render() {
		return (
			<Page title="Accomplishments">
				<section className="banner banner-seven">
					<div className="banner-overlay">
						<div className="container">
							<div className="banner-seven-content">
								<div className="row">
									<div className="col-md-6 col-sm-12 col-xs-12">
										<div className="seven-content-left">
											<div className="content">
												<span>Meet</span> <span>Up</span>
												<h2>BUSINESS CONFERENCE 2017</h2>
											</div>
										</div>
									</div>
									<div className="col-md-6 col-sm-12 hidden-xs">
										<div className="seven-content-right-bg">
											<div className="seven-content-right">
												<div className="content">
													<span className="counter" data-count="24">24</span>
													<p>December 2017</p>
													<div id="clockdiv">
														<div className="clock-item">
															<span className="days">5</span>
															<p className="smalltext">Days</p>
														</div>
														<div className="clock-item">
															<span className="hours">4</span>
															<p className="smalltext">Hour</p>
														</div>
														<div className="clock-item">
															<span className="minutes">3</span>
															<p className="smalltext">Minu</p>
														</div>
														<div className="clock-item">
															<span className="seconds">2</span>
															<p className="smalltext">Seco</p>
														</div>
													</div>
												</div>
											</div>
										</div>
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
