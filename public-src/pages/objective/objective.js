import get from 'app-components/api/get/get';
import styles from './objective.scss';
import API from 'app-api/objective';

import React, { Component } from 'react';
import Button from 'app-components/button/button';
import Lipsum from 'app-components/lipsum/lipsum';
import Page from 'app-components/page/page';
import Map from 'app-components/map/map';

@get(API)
export default class Objective extends Component {
	static propTypes = {
		data: React.PropTypes.object,
	};
	render() {
		return (
			<Page title="Objective">
				<section className="about about-three">
					<div className="container">
						<div className="row" style={{ marginBottom: '2rem' }}>
							<div className="col-md-6 col-sm-12 col-xs-12">
								<Map center={ this.props.data.location } zoom={ 17 } />
							</div>
							<div className="col-md-6 col-sm-12 col-xs-12">
								<Lipsum />
								<Lipsum />
								<Lipsum />
							</div>
						</div>
						<div className="row" >
							<div className="col-md-6 col-sm-12 col-xs-12">
								<ul className="nav nav-pills" role="tablist">
									<li role="presentation" className="active"><a href="#">Points <span className="badge">{ this.props.data.points }</span></a></li>
								</ul>
							</div>
							<div className="col-md-6 col-sm-12 col-xs-12">
								<Button to='/objective-submit' className={ styles.buttonRight }>Submit</Button>
							</div>
						</div>
					</div>
				</section>
			</Page>
		);
	}
}
