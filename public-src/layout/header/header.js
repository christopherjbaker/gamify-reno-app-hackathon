import styles from './header.scss';
import classes from 'app-utils/classes';

import React, { Component } from 'react';

export default class Layout extends Component {
	static propTypes = {
		navigation: React.PropTypes.arrayOf(React.PropTypes.shape({
			label: React.PropTypes.string.isRequired,
			to: React.PropTypes.string.isRequired,
		})).isRequired,
		className: React.PropTypes.string,
	};

	render() {
		return (
			<header className={ classes('header-six', styles.main, this.props.className) }>
				<nav className="main-menu menu-six menu-fixed">
					<div className="container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="index.html"><img src={ require('./assets/images/logo.png') } alt="logo" className="img-responsive" /></a>
						</div>
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav navbar-right">
								<li className="dropdown active">
									<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home<span className="caret"></span></a>
									<ul className="dropdown-menu">
										<li className="active"><a href="index.html">Homepage Style One</a></li>
										<li><a href="index-2.html">Homepage Style Two</a></li>
										<li><a href="index-3.html">Homepage Style Three</a></li>
										<li><a href="index-4.html">Homepage Style Four</a></li>
										<li><a href="index-5.html">Homepage Style Five</a></li>
										<li><a href="index-6.html">Homepage Style Six</a></li>
										<li><a href="index-7.html">Homepage Style Seven</a></li>
									</ul>
								</li>
								<li className="dropdown">
									<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About<span className="caret"></span></a>
									<ul className="dropdown-menu">
										<li><a href="about.html">About Style One</a></li>
										<li><a href="about-2.html">About Style Two</a></li>
									</ul>
								</li>
								<li className="dropdown">
									<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Speakers<span className="caret"></span></a>
									<ul className="dropdown-menu">
										<li><a href="speakers.html">Speakers</a></li>
										<li><a href="speaker-details.html">Speaker Details</a></li>
									</ul>
								</li>
								<li><a href="schedule.html">Schedule</a></li>
								<li className="dropdown">
									<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages<span className="caret"></span></a>
									<ul className="dropdown-menu">
										<li><a href="blog.html">Blog Page</a></li>
										<li><a href="single.html">Blog Single</a></li>
										<li><a href="ticket.html">Pricing Table</a></li>
										<li><a href="contact.html">Contact</a></li>
										<li><a href="404.html">404 Error</a></li>
									</ul>
								</li>
								<li className="dropdown">
									<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop<span className="caret"></span></a>
									<ul className="dropdown-menu">
										<li><a href="product.html">Prodect Page</a></li>
										<li><a href="product-details.html">Product Details</a></li>
										<li><a href="shop-cart.html">Cart Page</a></li>
									</ul>
								</li>
								<li><a href="ticket.html" className="menu-button">Buy Ticket</a></li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		);
	}
}
