import classes from 'app-utils/classes';

import React, { Component } from 'react';

export default class Table extends Component {
	static propTypes = {
		headers: React.PropTypes.arrayOf(React.PropTypes.shape({
			label: React.PropTypes.string.isRequired,
			key: React.PropTypes.string.isRequired,
		})).isRequired,
		data: React.PropTypes.object,
		className: React.PropTypes.string,
	};
	
	render() {
		return (
			<div className="tab-content">
				<div role="tabpanel" className="tab-pane active" id="day-one">
					<div className="schedule-table table-responsive">
						<table>
							<thead>
								<tr>
									{ this.props.headers.map(({ label, key }) =>
										<th key={ key }>{ label }</th>
									) }
								</tr>
							</thead>
							<tbody>
								{/* { this.props.data.map(({ label, key }) =>
									<tr key={ data.id }>
										{ this.props.headers.map(({ label, key }) =>
											<td key={ key }>{ data[key] }</td>
										) }
									</tr>
								) } */}
							</tbody>
						</table>
					</div>{/* schedule-table */}
					<a href="#" className="schedule-button default-button">download schedule <span><i className="fa fa-download" aria-hidden="true" /></span></a>
				</div>
				<div role="tabpanel" className="tab-pane" id="day-two">
					<div className="schedule-table table-responsive">
						<table>
							<thead>
								<tr>
									<th className="time">Time</th>
									<th className="session">Session</th>
									<th className="spekers">Spekers</th>
									<th className="venue">Venue</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="time"><span><i className="fa fa-clock-o" aria-hidden="true" /></span>08:30am-04:30pm</td>
									<td className="session"><span><i className="fa fa-list-alt" aria-hidden="true" /></span>Credibly develop wireless opportunities</td>
									<td className="spekers"><span><i className="fa fa-microphone" aria-hidden="true" /></span>Smith Johnson</td>
									<td className="venue"><span><i className="fa fa-home" aria-hidden="true" /></span>Room-01</td>
								</tr>
								<tr>
									<td className="time"><span><i className="fa fa-clock-o" aria-hidden="true" /></span>08:30am-04:30pm</td>
									<td className="session"><span><i className="fa fa-list-alt" aria-hidden="true" /></span>Eficiently myocrdinate ineensive granular</td>
									<td className="spekers"><span><i className="fa fa-microphone" aria-hidden="true" /></span>William John</td>
									<td className="venue"><span><i className="fa fa-home" aria-hidden="true" /></span>Room-02</td>
								</tr>
								<tr>
									<td className="time"><span><i className="fa fa-clock-o" aria-hidden="true" /></span>08:30am-04:30pm</td>
									<td className="session"><span><i className="fa fa-list-alt" aria-hidden="true" /></span>Appropriately leverage other's extensible</td>
									<td className="spekers"><span><i className="fa fa-microphone" aria-hidden="true" /></span>Raisen Aero</td>
									<td className="venue"><span><i className="fa fa-home" aria-hidden="true" /></span>Room-03</td>
								</tr>
								<tr>
									<td className="time"><span><i className="fa fa-clock-o" aria-hidden="true" /></span>08:30am-04:30pm</td>
									<td className="session"><span><i className="fa fa-list-alt" aria-hidden="true" /></span>Seamlessly coordinate economically sound.</td>
									<td className="spekers"><span><i className="fa fa-microphone" aria-hidden="true" /></span>Robot Smith</td>
									<td className="venue"><span><i className="fa fa-home" aria-hidden="true" /></span>Room-04</td>
								</tr>
								<tr>
									<td className="time"><span><i className="fa fa-clock-o" aria-hidden="true" /></span>08:30am-04:30pm</td>
									<td className="session"><span><i className="fa fa-list-alt" aria-hidden="true" /></span>Through future-proof web-readiness.</td>
									<td className="spekers"><span><i className="fa fa-microphone" aria-hidden="true" /></span>Smith Johnson</td>
									<td className="venue"><span><i className="fa fa-home" aria-hidden="true" /></span>Room-05</td>
								</tr>
								<tr>
									<td className="time"><span><i className="fa fa-clock-o" aria-hidden="true" /></span>08:30am-04:30pm</td>
									<td className="session"><span><i className="fa fa-list-alt" aria-hidden="true" /></span>Eficiently myocrdinate ineensive granular</td>
									<td className="spekers"><span><i className="fa fa-microphone" aria-hidden="true" /></span>William John</td>
									<td className="venue"><span><i className="fa fa-home" aria-hidden="true" /></span>Room-06</td>
								</tr>
							</tbody>
						</table>
					</div>{/* schedule-table */}
					<a href="#" className="schedule-button default-button">download schedule <span><i className="fa fa-download" aria-hidden="true" /></span></a>
				</div>
				<div role="tabpanel" className="tab-pane" id="day-three">
					<div className="schedule-table table-responsive">
						<table>
							<thead>
								<tr>
									<th className="time">Time</th>
									<th className="session">Session</th>
									<th className="spekers">Spekers</th>
									<th className="venue">Venue</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="time"><span><i className="fa fa-clock-o" aria-hidden="true" /></span>08:30am-04:30pm</td>
									<td className="session"><span><i className="fa fa-list-alt" aria-hidden="true" /></span>Credibly develop wireless opportunities</td>
									<td className="spekers"><span><i className="fa fa-microphone" aria-hidden="true" /></span>Smith Johnson</td>
									<td className="venue"><span><i className="fa fa-home" aria-hidden="true" /></span>Room-01</td>
								</tr>
								<tr>
									<td className="time"><span><i className="fa fa-clock-o" aria-hidden="true" /></span>08:30am-04:30pm</td>
									<td className="session"><span><i className="fa fa-list-alt" aria-hidden="true" /></span>Eficiently myocrdinate ineensive granular</td>
									<td className="spekers"><span><i className="fa fa-microphone" aria-hidden="true" /></span>William John</td>
									<td className="venue"><span><i className="fa fa-home" aria-hidden="true" /></span>Room-02</td>
								</tr>
								<tr>
									<td className="time"><span><i className="fa fa-clock-o" aria-hidden="true" /></span>08:30am-04:30pm</td>
									<td className="session"><span><i className="fa fa-list-alt" aria-hidden="true" /></span>Appropriately leverage other's extensible</td>
									<td className="spekers"><span><i className="fa fa-microphone" aria-hidden="true" /></span>Raisen Aero</td>
									<td className="venue"><span><i className="fa fa-home" aria-hidden="true" /></span>Room-03</td>
								</tr>
								<tr>
									<td className="time"><span><i className="fa fa-clock-o" aria-hidden="true" /></span>08:30am-04:30pm</td>
									<td className="session"><span><i className="fa fa-list-alt" aria-hidden="true" /></span>Seamlessly coordinate economically sound.</td>
									<td className="spekers"><span><i className="fa fa-microphone" aria-hidden="true" /></span>Robot Smith</td>
									<td className="venue"><span><i className="fa fa-home" aria-hidden="true" /></span>Room-04</td>
								</tr>
								<tr>
									<td className="time"><span><i className="fa fa-clock-o" aria-hidden="true" /></span>08:30am-04:30pm</td>
									<td className="session"><span><i className="fa fa-list-alt" aria-hidden="true" /></span>Through future-proof web-readiness.</td>
									<td className="spekers"><span><i className="fa fa-microphone" aria-hidden="true" /></span>Smith Johnson</td>
									<td className="venue"><span><i className="fa fa-home" aria-hidden="true" /></span>Room-05</td>
								</tr>
							</tbody>
						</table>
					</div>{/* schedule-table */}
					<a href="#" className="schedule-button default-button">download schedule <span><i className="fa fa-download" aria-hidden="true" /></span></a>
				</div>
				<div role="tabpanel" className="tab-pane" id="day-four">
					<div className="schedule-table table-responsive">
						<table>
							<thead>
								<tr>
									<th className="time">Time</th>
									<th className="session">Session</th>
									<th className="spekers">Spekers</th>
									<th className="venue">Venue</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="time"><span><i className="fa fa-clock-o" aria-hidden="true" /></span>08:30am-04:30pm</td>
									<td className="session"><span><i className="fa fa-list-alt" aria-hidden="true" /></span>Credibly develop wireless opportunities</td>
									<td className="spekers"><span><i className="fa fa-microphone" aria-hidden="true" /></span>Smith Johnson</td>
									<td className="venue"><span><i className="fa fa-home" aria-hidden="true" /></span>Room-01</td>
								</tr>
								<tr>
									<td className="time"><span><i className="fa fa-clock-o" aria-hidden="true" /></span>08:30am-04:30pm</td>
									<td className="session"><span><i className="fa fa-list-alt" aria-hidden="true" /></span>Eficiently myocrdinate ineensive granular</td>
									<td className="spekers"><span><i className="fa fa-microphone" aria-hidden="true" /></span>William John</td>
									<td className="venue"><span><i className="fa fa-home" aria-hidden="true" /></span>Room-02</td>
								</tr>
								<tr>
									<td className="time"><span><i className="fa fa-clock-o" aria-hidden="true" /></span>08:30am-04:30pm</td>
									<td className="session"><span><i className="fa fa-list-alt" aria-hidden="true" /></span>Appropriately leverage other's extensible</td>
									<td className="spekers"><span><i className="fa fa-microphone" aria-hidden="true" /></span>Raisen Aero</td>
									<td className="venue"><span><i className="fa fa-home" aria-hidden="true" /></span>Room-03</td>
								</tr>
								<tr>
									<td className="time"><span><i className="fa fa-clock-o" aria-hidden="true" /></span>08:30am-04:30pm</td>
									<td className="session"><span><i className="fa fa-list-alt" aria-hidden="true" /></span>Seamlessly coordinate economically sound.</td>
									<td className="spekers"><span><i className="fa fa-microphone" aria-hidden="true" /></span>Robot Smith</td>
									<td className="venue"><span><i className="fa fa-home" aria-hidden="true" /></span>Room-04</td>
								</tr>
								<tr>
									<td className="time"><span><i className="fa fa-clock-o" aria-hidden="true" /></span>08:30am-04:30pm</td>
									<td className="session"><span><i className="fa fa-list-alt" aria-hidden="true" /></span>Through future-proof web-readiness.</td>
									<td className="spekers"><span><i className="fa fa-microphone" aria-hidden="true" /></span>Smith Johnson</td>
									<td className="venue"><span><i className="fa fa-home" aria-hidden="true" /></span>Room-05</td>
								</tr>
								<tr>
									<td className="time"><span><i className="fa fa-clock-o" aria-hidden="true" /></span>08:30am-04:30pm</td>
									<td className="session"><span><i className="fa fa-list-alt" aria-hidden="true" /></span>Eficiently myocrdinate ineensive granular</td>
									<td className="spekers"><span><i className="fa fa-microphone" aria-hidden="true" /></span>William John</td>
									<td className="venue"><span><i className="fa fa-home" aria-hidden="true" /></span>Room-06</td>
								</tr>
								<tr>
									<td className="time"><span><i className="fa fa-clock-o" aria-hidden="true" /></span>08:30am-04:30pm</td>
									<td className="session"><span><i className="fa fa-list-alt" aria-hidden="true" /></span>Gredibly develop wireless opportunities</td>
									<td className="spekers"><span><i className="fa fa-microphone" aria-hidden="true" /></span>Raisen Aero</td>
									<td className="venue"><span><i className="fa fa-home" aria-hidden="true" /></span>Room-07</td>
								</tr>
							</tbody>
						</table>
					</div>{/* schedule-table */}
					<a href="#" className="schedule-button default-button">download schedule <span><i className="fa fa-download" aria-hidden="true" /></span></a>
				</div>
			</div>
		);
	}
}
