import styles from './category.scss';
import classes from 'app-utils/classes';

import React, { Component } from 'react';

export default class Category extends Component {
	render() {
		return (
			<div>
				<div className={classes(styles.pricingItem, styles.fourth)}>
					<div className={styles.pricingHeader}>
						<h3 className="name">PREMIUM</h3>
						<h2 className="amount"><sup>$</sup>500</h2>
						<a href="#">ticket now</a>
					</div>
					
					<div className={ styles.pricingOptions }>
						<div>
							<p>Conference Tickets<span><i className="fa fa-check" aria-hidden="true" /></span></p><i className="fa fa-check" aria-hidden="true">
							<p>Free Lunch And Coffee<span><i className="fa fa-check" aria-hidden="true" /></span></p><i className="fa fa-check" aria-hidden="true">
							<p>Easy Access<span><i className="fa fa-check" aria-hidden="true" /></span></p><i className="fa fa-check" aria-hidden="true">
							<p>Certificate<span><i className="fa fa-check" aria-hidden="true" /></span></p><i className="fa fa-check" aria-hidden="true">
							<p>Printed Metarials<span><i className="fa fa-check" aria-hidden="true" /></span></p><i className="fa fa-check" aria-hidden="true">
							<p>More Options<span><i className="fa fa-check" aria-hidden="true" /></span></p><i className="fa fa-check" aria-hidden="true">
						</i></i></i></i></i></i></div><i className="fa fa-check" aria-hidden="true"><i className="fa fa-check" aria-hidden="true"><i className="fa fa-check" aria-hidden="true">
					</i></i></i></div><i className="fa fa-check" aria-hidden="true"><i className="fa fa-check" aria-hidden="true"><i className="fa fa-check" aria-hidden="true">{'{'}/* pricingOptions */{'}'}
					
					<div className={styles.pricingButton}>
						<a href="#">ticket now</a>
					</div>
				</i></i></i></div>
			</div>
		);
	}
}
