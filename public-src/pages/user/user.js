import get from 'app-components/api/get/get';
import API from 'app-api/user';

import React, { Component } from 'react';
import Page from 'app-components/page/page';

@get(API)
export default class User extends Component {
	render() {
		return (
			<Page title="User">

			</Page>
		);
	}
}
