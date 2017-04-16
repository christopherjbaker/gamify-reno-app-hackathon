import React, { Component } from 'react';
import Page from 'app-components/page/page';
import BigNumber from 'app-components/big-number/big-number';
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
