import API from 'app-api/user';

import React, { Component } from 'react';
import Page from 'app-components/page/page';

export default class UserList extends Component {
	constructor() {
		super();

		this.state = {
			data: null,
		};
	}

	async componentWillMount() {
		let data = await API.search();

		this.setState({ data });
	}

	render() {
		if (!this.state.data) {
			return (
				<Page title="Users" className="loading" />
			);
		}

		return (
			<Page title="Users">
				<pre>{ JSON.stringify(this.state.data, null, 4) }</pre>
			</Page>
		);
	}
}
