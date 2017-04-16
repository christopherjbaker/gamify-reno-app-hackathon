import styles from './about.scss';

import React, { Component } from 'react';
import Page from 'app-components/page/page';

export default class About extends Component {
	render() {
		return (
			<Page className={ styles.main } title="About Us">
				About Us
			</Page>
		);
	}
}
