import get from 'app-components/api/get/get';
import API from 'app-api/objective';

import React, { Component } from 'react';
import Page from 'app-components/page/page';

@get(API)
export default class Objective extends Component {
	render() {
		return (
			<Page title="Objective">
				<pre>{ JSON.stringify(this.props.data, null, 4) }</pre>
			</Page>
		);
	}
}
