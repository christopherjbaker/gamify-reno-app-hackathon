import styles from './error.scss';

import React, { Component } from 'react';

export default class Error404 extends Component {
	componentWillMount() {
		if (navigator.userAgent.match(/Google/) && window.location.pathname !== '/error404') {
			window.location = '/error404';
		}
	}
	
	render() {
		return (
			<div className={ styles.main }>
				error
			</div>
		);
	}
}
