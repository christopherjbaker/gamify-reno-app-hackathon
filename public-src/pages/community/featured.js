import React, { Component } from 'react';

export default class Featured extends Component {
	render() {
		return (
			<section className="pricing">
				<div className="overlay">
					<div className="container">
						<div className="pricing-items">
							<div className="row">
								<div className="col-md-4 col-sm-6 col-xs-12">
									<div className="pricing-item first">
										<div className="pricing-header">
											<h3 className="name">First Featured Accomplishment</h3>
											<h2 className="amount"><sup>$</sup>100</h2>
										</div>
										<div className="pricing-options">
											<p><span><i className="fa fa-check" aria-hidden="true" /></span>Conference Tickets</p>
											<p><span><i className="fa fa-check" aria-hidden="true" /></span>Free Lunch And Coffee</p>
											<p><span><i className="fa fa-check" aria-hidden="true" /></span>Easy Access</p>
											<p><span className="off"><i className="fa fa-times" aria-hidden="true" /></span>Certificate</p>
											<p><span className="off"><i className="fa fa-times" aria-hidden="true" /></span>Printed Metarials</p>
											<p><span className="off"><i className="fa fa-times" aria-hidden="true" /></span>More Options</p>
										</div>
										<div className="pricing-button">
											<a href="#">ticket now</a>
										</div>
									</div>
								</div>
								<div className="col-md-4 col-sm-6 col-xs-12">
									<div className="pricing-item second">
										<div className="pricing-header">
											<h3 className="name">second Featured Accomplishment</h3>
											<h2 className="amount"><sup>$</sup>200</h2>
										</div>
										<div className="pricing-options">
											<p><span><i className="fa fa-check" aria-hidden="true" /></span>Conference Tickets</p>
											<p><span><i className="fa fa-check" aria-hidden="true" /></span>Free Lunch And Coffee</p>
											<p><span><i className="fa fa-check" aria-hidden="true" /></span>Easy Access</p>
											<p><span><i className="fa fa-check" aria-hidden="true" /></span>Certificate</p>
											<p><span className="off"><i className="fa fa-times" aria-hidden="true" /></span>Printed Metarials</p>
											<p><span className="off"><i className="fa fa-times" aria-hidden="true" /></span>More Options</p>
										</div>
										<div className="pricing-button">
											<a href="#">ticket now</a>
										</div>
									</div>
								</div>
								<div className="col-md-4 col-sm-6 col-xs-12">
									<div className="pricing-item third">
										<div className="pricing-header">
											<h3 className="name">Third Featured Accomplishment</h3>
											<h2 className="amount"><sup></sup>250</h2>
										</div>
										<div className="pricing-options">
											<p><span><i className="fa fa-check" aria-hidden="true" /></span>Conference Tickets</p>
											<p><span><i className="fa fa-check" aria-hidden="true" /></span>Free Lunch And Coffee</p>
											<p><span><i className="fa fa-check" aria-hidden="true" /></span>Easy Access</p>
											<p><span><i className="fa fa-check" aria-hidden="true" /></span>Certificate</p>
											<p><span><i className="fa fa-check" aria-hidden="true" /></span>Printed Metarials</p>
											<p><span><i className="fa fa-check" aria-hidden="true" /></span>More Options</p>
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
		);
	}
}
