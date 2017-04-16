import React, { Component } from 'react';
import Page from 'app-components/page/page';
import Featured from './featured';

export default class Community extends Component {
	render() {
		return (
			<Page title="Community">
				<Featured />
			</Page>
		);
	}
}
