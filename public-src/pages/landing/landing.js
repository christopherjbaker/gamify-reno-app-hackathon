import React, { Component } from 'react';
import Page from 'app-components/page/page';
import BigNumber from 'app-components/big-number/big-number';

export default class Landing extends Component {
	render() {
		return (
			<Page >
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
												<BigNumber/>
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
