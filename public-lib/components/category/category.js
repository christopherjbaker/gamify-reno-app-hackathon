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
			<div className={ classes(styles.main, 'container-fluid') }>
				<div className={ classes(styles.title, 'col-md-6')}>
					{ this.props.title }
				</div>
				<div className={ classes(styles.stats, 'col-md-6')}>
					Stats
				</div>
			</div>
		);
	}
}
