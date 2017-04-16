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
						<h2>BigEvent</h2>
						<ul className="event-social">
							<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
							<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
							<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
							<li><a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
							<li><a href="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
							<li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
						</ul>
						<p>Copyright &copy; 2017. Design and Development by <a href="https://www.codexcoder.com/">LabArtisan</a></p>
					</div>
				</div>
			</footer>
		);
	}
}
