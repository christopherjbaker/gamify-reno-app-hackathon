import API from 'app-api/objective';

import React, { Component } from 'react';
import Page from 'app-components/page/page';

export default class ObjectiveList extends Component {
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
				<Page title="Objectives" className="loading" />
			);
		}

		return (
			<Page title="Objectives">
				<pre>{ JSON.stringify(this.state.data, null, 4) }</pre>
			</Page>
		);
	}
}
