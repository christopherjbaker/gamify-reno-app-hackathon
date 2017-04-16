import React, { Component } from 'react';
import Page from 'app-components/page/page';
import BigNumber from 'app-components/big-number/big-number';

export default class Landing extends Component {
	render() {
		return (
			<Page>
				<section className="banner banner-seven">
					<div className="banner-overlay">
						<div className="container">
							<div className="banner-seven-content">
								<div className="row">
									<div className="col-md-6 col-sm-12 col-xs-12">
										<div className="seven-content-left">
											<BigNumber
												amount={10}
												category='accomplishments'
											/>
										</div>
									</div>
									<div className="col-md-6 col-sm-12 hidden-xs">
										<div className="seven-content-right-bg">
											<div className="seven-content-right">
												<BigNumber
													amount={270}
													category='points'
												/>
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
