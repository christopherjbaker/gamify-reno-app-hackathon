import styles from './footer.scss';
import classes from 'app-utils/classes';

import React, { Component } from 'react';

export default class Layout extends Component {
	static propTypes = {
		className: React.PropTypes.string,
	};

	render() {
		return (
			<footer className={ classes('footer-six', styles.main, this.props.className) }>
				<div className="overlay home-six-overlay">
					<div className="container">
						<h2>GamifyReno</h2>
					</div>
				</div>
			</footer>
		);
	}
}
