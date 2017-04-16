import get from 'app-components/api/get/get';
import API from 'app-api/accomplishment';

import React, { Component } from 'react';
import Page from 'app-components/page/page';

@get(API)
export default class Accomplishment extends Component {
	render() {
		return (
			<Page title="Accomplishment">

			</Page>
		);
	}
}
