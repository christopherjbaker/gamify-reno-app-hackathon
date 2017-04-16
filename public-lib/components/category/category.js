import styles from './category.scss';
import classes from 'app-utils/classes';

import React, { Component } from 'react';

export default class Category extends Component {
	static propTypes = {
		title: React.PropTypes.string.isRequired,
		color: React.PropTypes.string,
	};
	render() {
		return (
			<section className={classes(styles.main, 'pricing pricing-three')}>
				<div>
					<div className="container">
						<div className="pricing-items">
							<div className="row">
								<div className="col-md-12 col-sm-12 col-xs-12">
									<div className="pricing-item fourth">
										<div className="pricing-header">
											<h3 className="name">PREMIUM</h3>
											<h2 className="amount">{ this.props.title }</h2>
											<a href="#">ticket now</a>
										</div>
										<div className="pricing-options">
											<div>
												<p>Conference Tickets<span><i className="fa fa-check" aria-hidden="true" /></span></p>
												<p>Free Lunch And Coffee<span><i className="fa fa-check" aria-hidden="true" /></span></p>
												<p>Easy Access<span><i className="fa fa-check" aria-hidden="true" /></span></p>
												<p>Certificate<span><i className="fa fa-check" aria-hidden="true" /></span></p>
												<p>Printed Metarials<span><i className="fa fa-check" aria-hidden="true" /></span></p>
												<p>More Options<span><i className="fa fa-check" aria-hidden="true" /></span></p>
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
		);
	}
}
