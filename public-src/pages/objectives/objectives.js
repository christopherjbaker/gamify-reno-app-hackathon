import styles from './objectives.scss';
import classes from 'app-utils/classes';

import React, { Component } from 'react';
import Page from 'app-components/page/page';

export default class Landing extends Component {
	render() {
		return (
			<Page>
				<section className="banner banner-three">
					<div className="banner-overlay">
						<div className="container">
							<div className="banner-content">
								<div className="content">
									<p>don't miss the upcoming event</p>
									<h2>CONFERENCE 2017</h2>
									<ul>
										<li><span className="flaticon-tool" />24-29 December, 2017</li>
										<li><span className="flaticon-signs" />21 King Street, Dhaka 1205, Bangladesh.</li>
									</ul>
								</div>{/* content */}
								<form action="/">
									<h3>Event registration</h3>
									<input type="text" name="name" placeholder="Full Name" className="banner-input" />
									<input type="text" name="email" placeholder="Email Address" className="banner-input" />
									<input type="text" name="phone" placeholder="Phone Number" className="banner-input" />
									<select className="banner-input">
										<option>Basic-$100</option>
										<option>Intermediat-$500</option>
										<option>Advance-$1000</option>
									</select>
									<input type="submit" name="sumbit" defaultValue="Register Now" className="banner-submit" />
								</form>
							</div>{/* banner content */}
						</div>{/* container */}
					</div>{/* overlay */}
				</section>

				<section className="about about-three padding-120">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-sm-12 col-xs-12">
								<div className="image">
									<div className="left">
										<img src="images/about/about_02.jpg" alt="about iamge" className="img-responsive" />
									</div>
									<div className="right">
										<div className="top"><img src="images/about/about_03.jpg" alt="about iamge" className="img-responsive" /></div>
										<div className="bottom"><img src="images/about/about_04.jpg" alt="about iamge" className="img-responsive" /></div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-sm-12 col-xs-12">
								<div className="content">
									<div className="section-header">
										<h2>About the Conference 2017</h2>
										<p><em>Creative Thinking for Event Conference</em></p>
									</div>
									<p>Phoslorescently ntiate principle-centered networks via magnetc services an
										fulys tested metrics without freprof web services enabled experences bricks
										Rapidiously evisculate standards compliant web services are afor errorfree
										Rapidiously evisculate standards compliant fullys tested metrics withoutan
										fullys tested metrics without futureproof web services</p>
									<ul className="about-button">
										<li><a href="#" className="default-button">read more</a></li>
										<li><a href="#" className="default-button">buy ticket</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>{/* container */}
				</section>

				<section className="speakers speakers-three">
					<div className="overlay">
						<div className="container">
							<div className="section-header text-center">
								<h3>OUR SPEAKERS</h3>
								<p><em>Quickly harness dynamic thinking through value added models.</em></p>
							</div>
							<div className="speaker-items">
								<div className="row">
									<div className="col-md-3 col-sm-6 col-xs-12">
										<div className="speaker-item">
											<div className="speaker-image">
												<img src="images/speakers/speaker_09.jpg" alt="speaker image" className="img-responsive" />
											</div>{/* speaker-image */}
											<div className="speaker-content">
												<h4><a href="speaker-details.html">robot smith</a></h4>
												<span>Founder</span>
											</div>{/* speaker-content */}
										</div>{/* speaker-item */}
									</div>
									<div className="col-md-3 col-sm-6 col-xs-12">
										<div className="speaker-item">
											<div className="speaker-image">
												<img src="images/speakers/speaker_10.jpg" alt="speaker image" className="img-responsive" />
											</div>{/* speaker-image */}
											<div className="speaker-content">
												<h4><a href="speaker-details.html">janaton smith</a></h4>
												<span>Founder</span>
											</div>{/* speaker-content */}
										</div>{/* speaker-item */}
									</div>
									<div className="col-md-3 col-sm-6 col-xs-12">
										<div className="speaker-item">
											<div className="speaker-image">
												<img src="images/speakers/speaker_11.jpg" alt="speaker image" className="img-responsive" />
											</div>{/* speaker-image */}
											<div className="speaker-content">
												<h4><a href="speaker-details.html">WILLIAM JOHN</a></h4>
												<span>Founder</span>
											</div>{/* speaker-content */}
										</div>{/* speaker-item */}
									</div>
									<div className="col-md-3 col-sm-6 col-xs-12">
										<div className="speaker-item">
											<div className="speaker-image">
												<img src="images/speakers/speaker_12.jpg" alt="speaker image" className="img-responsive" />
											</div>{/* speaker-image */}
											<div className="speaker-content">
												<h4><a href="speaker-details.html">Raisen Aero</a></h4>
												<span>Founder</span>
											</div>{/* speaker-content */}
										</div>{/* speaker-item */}
									</div>
									<div className="col-md-3 col-sm-6 col-xs-12">
										<div className="speaker-item">
											<div className="speaker-image">
												<img src="images/speakers/speaker_13.jpg" alt="speaker image" className="img-responsive" />
											</div>{/* speaker-image */}
											<div className="speaker-content">
												<h4><a href="speaker-details.html">Raisen Aero</a></h4>
												<span>Founder</span>
											</div>{/* speaker-content */}
										</div>{/* speaker-item */}
									</div>
									<div className="col-md-3 col-sm-6 col-xs-12">
										<div className="speaker-item">
											<div className="speaker-image">
												<img src="images/speakers/speaker_14.jpg" alt="speaker image" className="img-responsive" />
											</div>{/* speaker-image */}
											<div className="speaker-content">
												<h4><a href="speaker-details.html">robot smith</a></h4>
												<span>Founder</span>
											</div>{/* speaker-content */}
										</div>{/* speaker-item */}
									</div>
									<div className="col-md-3 col-sm-6 col-xs-12">
										<div className="speaker-item">
											<div className="speaker-image">
												<img src="images/speakers/speaker_15.jpg" alt="speaker image" className="img-responsive" />
											</div>{/* speaker-image */}
											<div className="speaker-content">
												<h4><a href="speaker-details.html">janaton smith</a></h4>
												<span>Founder</span>
											</div>{/* speaker-content */}
										</div>{/* speaker-item */}
									</div>
									<div className="col-md-3 col-sm-6 col-xs-12">
										<div className="speaker-item">
											<div className="speaker-image">
												<img src="images/speakers/speaker_16.jpg" alt="speaker image" className="img-responsive" />
											</div>{/* speaker-image */}
											<div className="speaker-content">
												<h4><a href="speaker-details.html">WILLIAM JOHN</a></h4>
												<span>Founder</span>
											</div>{/* speaker-content */}
										</div>{/* speaker-item */}
									</div>
								</div>{/* row */}
							</div>{/* speaker-items */}
						</div>{/* container */}
					</div>{/* overlay */}
				</section>

				<section className="schedules padding-120">
					<div className="container">
						<div className="section-header text-center">
							<h3>Event Schedules</h3>
							<p><em>Quickly harness dynamic thinking through value added models.</em></p>
						</div>
						<div className="schedule-tabs">
							{/* Nav tabs */}
							<ul className="nav nav-tabs" role="tablist">
								<li role="presentation" className="active"><a href="#day-one" aria-controls="day-one" role="tab" data-toggle="tab">
										Day-01
										<span>14 december 2017</span>
									</a></li>
								<li role="presentation"><a href="#day-two" aria-controls="day-two" role="tab" data-toggle="tab">
										Day-02
										<span>18 december 2017</span>
									</a></li>
								<li role="presentation"><a href="#day-three" aria-controls="day-three" role="tab" data-toggle="tab">
										Day-03
										<span>24 december 2017</span>
									</a></li>
								<li role="presentation"><a href="#day-four" aria-controls="day-four" role="tab" data-toggle="tab">
										Day-04
										<span>29 december 2017</span>
									</a></li>
							</ul>
							{/* Tab panes */}
							<div className="tab-content">
								<div role="tabpanel" className="tab-pane active" id="day-one">
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
												<tr>
													<td className="time"><span><i className="fa fa-clock-o" aria-hidden="true" /></span>08:30am-04:30pm</td>
													<td className="session"><span><i className="fa fa-list-alt" aria-hidden="true" /></span>Eppropriately leverage other's extensible</td>
													<td className="spekers"><span><i className="fa fa-microphone" aria-hidden="true" /></span>Robot Smith</td>
													<td className="venue"><span><i className="fa fa-home" aria-hidden="true" /></span>Room-08</td>
												</tr>
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
						</div>
					</div>{/* container */}
				</section>

				<section className="pricing pricing-three">
					<div className="overlay">
						<div className="container">
							<div className="section-header text-center">
								<h3>Pricing Table</h3>
								<p><em>Quickly harness dynamic thinking through value added models.</em></p>
							</div>
							<div className="pricing-items">
								<div className="row">
									<div className="col-md-6 col-sm-12 col-xs-12">
										<div className="pricing-item first">
											<div className="pricing-header">
												<h3 className="name">Starter</h3>
												<h2 className="amount"><sup>$</sup>150</h2>
												<a href="#">ticket now</a>
											</div>{/* pricing-header */}
											<div className="pricing-options">
												<div>
													<p>Conference Tickets<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Free Lunch And Coffee<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Easy Access<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Certificate<span className="off"><i className="fa fa-times" aria-hidden="true" /></span></p>
													<p>Printed Metarials<span className="off"><i className="fa fa-times" aria-hidden="true" /></span></p>
													<p>More Options<span className="off"><i className="fa fa-times" aria-hidden="true" /></span></p>
												</div>
											</div>{/* pricing-options */}
											<div className="pricing-button">
												<a href="#">ticket now</a>
											</div>
										</div>{/* pricing item */}
									</div>
									<div className="col-md-6 col-sm-12 col-xs-12">
										<div className="pricing-item second">
											<div className="pricing-header">
												<h3 className="name">Personal</h3>
												<h2 className="amount"><sup>$</sup>200</h2>
												<a href="#">ticket now</a>
											</div>{/* pricing-header */}
											<div className="pricing-options">
												<div>
													<p>Conference Tickets<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Free Lunch And Coffee<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Easy Access<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Certificate<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Printed Metarials<span className="off"><i className="fa fa-times" aria-hidden="true" /></span></p>
													<p>More Options<span className="off"><i className="fa fa-times" aria-hidden="true" /></span></p>
												</div>
											</div>{/* pricing-options */}
											<div className="pricing-button">
												<a href="#">ticket now</a>
											</div>
										</div>{/* pricing item */}
									</div>
									<div className="col-md-6 col-sm-12 col-xs-12">
										<div className="pricing-item third">
											<div className="pricing-header">
												<h3 className="name">business</h3>
												<h2 className="amount"><sup>$</sup>300</h2>
												<a href="#">ticket now</a>
											</div>{/* pricing-header */}
											<div className="pricing-options">
												<div>
													<p>Conference Tickets<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Free Lunch And Coffee<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Easy Access<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Certificate<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Printed Metarials<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>More Options<span className="off"><i className="fa fa-times" aria-hidden="true" /></span></p>
												</div>
											</div>{/* pricing-options */}
											<div className="pricing-button">
												<a href="#">ticket now</a>
											</div>
										</div>{/* pricing item */}
									</div>
									<div className="col-md-6 col-sm-12 col-xs-12">
										<div className="pricing-item fourth">
											<div className="pricing-header">
												<h3 className="name">PREMIUM</h3>
												<h2 className="amount"><sup>$</sup>500</h2>
												<a href="#">ticket now</a>
											</div>{/* pricing-header */}
											<div className="pricing-options">
												<div>
													<p>Conference Tickets<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Free Lunch And Coffee<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Easy Access<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Certificate<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Printed Metarials<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>More Options<span><i className="fa fa-check" aria-hidden="true" /></span></p>
												</div>
											</div>{/* pricing-options */}
											<div className="pricing-button">
												<a href="#">ticket now</a>
											</div>
										</div>{/* pricing item */}
									</div>
								</div>{/* row */}
							</div>{/* pricing items */}
						</div>{/* container */}
					</div>{/* overlay */}
				</section>

				<section className="sponsor sponsor-two padding-120">
					<div className="container">
						<div className="section-header text-center">
							<h3>Event Sponsors</h3>
							<p><em>Quickly harness dynamic thinking through value added models.</em></p>
						</div>
						<div className="sponsor-item">
							<h5>Platinum Sponsors</h5>
							<div className="swiper-container sponsor-slider-one">
								<div className="swiper-wrapper">
									<div className="swiper-slide">
										<img src="images/sponsors/sponsor_01.jpg" alt="sponsor image" className="img-responsive" />
									</div>
									<div className="swiper-slide">
										<img src="images/sponsors/sponsor_02.jpg" alt="sponsor image" className="img-responsive" />
									</div>
									<div className="swiper-slide">
										<img src="images/sponsors/sponsor_03.jpg" alt="sponsor image" className="img-responsive" />
									</div>
								</div>
							</div>
						</div>{/* sponsor-item */}
						<div className="sponsor-item">
							<h5>Gold Sponsors</h5>
							<div className="swiper-container sponsor-slider-two">
								<div className="swiper-wrapper">
									<div className="swiper-slide">
										<img src="images/sponsors/sponsor_04.jpg" alt="sponsor image" className="img-responsive" />
									</div>
									<div className="swiper-slide">
										<img src="images/sponsors/sponsor_05.jpg" alt="sponsor image" className="img-responsive" />
									</div>
									<div className="swiper-slide">
										<img src="images/sponsors/sponsor_06.jpg" alt="sponsor image" className="img-responsive" />
									</div>
									<div className="swiper-slide">
										<img src="images/sponsors/sponsor_07.jpg" alt="sponsor image" className="img-responsive" />
									</div>
								</div>
							</div>
						</div>{/* sponsor-item */}
						<div className="sponsor-item">
							<h5>Selver Sponsors</h5>
							<div className="swiper-container sponsor-slider-three">
								<div className="swiper-wrapper">
									<div className="swiper-slide">
										<img src="images/sponsors/sponsor_08.jpg" alt="sponsor image" className="img-responsive" />
									</div>
									<div className="swiper-slide">
										<img src="images/sponsors/sponsor_09.jpg" alt="sponsor image" className="img-responsive" />
									</div>
									<div className="swiper-slide">
										<img src="images/sponsors/sponsor_10.jpg" alt="sponsor image" className="img-responsive" />
									</div>
									<div className="swiper-slide">
										<img src="images/sponsors/sponsor_11.jpg" alt="sponsor image" className="img-responsive" />
									</div>
									<div className="swiper-slide">
										<img src="images/sponsors/sponsor_12.jpg" alt="sponsor image" className="img-responsive" />
									</div>
								</div>
							</div>
						</div>{/* sponsor-item */}
						<a href="#" className="sponsor-button default-button">become a sponsors</a>
					</div>{/* container */}
				</section>

				<section className="gallery gallery-two">
					<div className="overlay">
						<div className="container">
							<div className="section-header text-center">
								<h3>Event gallery</h3>
								<p><em>Quickly harness dynamic thinking through value added models.</em></p>
							</div>
							<div className="gallery-items grid">
								<div className="gallery-item grid-sizer" />
								<div className="gallery-item grid-item">
									<img src="images/gallery/gallery_07.jpg" alt="gallery image" className="img-responsive" />
									<div className="overlay" />
									<a href="images/gallery/gallery_07.jpg" data-rel="lightcase:myCollection">
										<img src="images/gallery/gallery-icon.png" alt="gallery icon" className="img-responsive" />
									</a>
								</div>{/* gallery-item */}
								<div className="gallery-item grid-item">
									<img src="images/gallery/gallery_08.jpg" alt="gallery image" className="img-responsive" />
									<div className="overlay" />
									<a href="images/gallery/gallery_08.jpg" data-rel="lightcase:myCollection">
										<img src="images/gallery/gallery-icon.png" alt="gallery icon" className="img-responsive" />
									</a>
								</div>{/* gallery-item */}
								<div className="gallery-item grid-item">
									<img src="images/gallery/gallery_09.jpg" alt="gallery image" className="img-responsive" />
									<div className="overlay" />
									<a href="images/gallery/gallery_09.jpg" data-rel="lightcase:myCollection">
										<img src="images/gallery/gallery-icon.png" alt="gallery icon" className="img-responsive" />
									</a>
								</div>{/* gallery-item */}
								<div className="gallery-item grid-item">
									<img src="images/gallery/gallery_10.jpg" alt="gallery image" className="img-responsive" />
									<div className="overlay" />
									<a href="images/gallery/gallery_10.jpg" data-rel="lightcase:myCollection">
										<img src="images/gallery/gallery-icon.png" alt="gallery icon" className="img-responsive" />
									</a>
								</div>{/* gallery-item */}
								<div className="gallery-item grid-item">
									<img src="images/gallery/gallery_11.jpg" alt="gallery image" className="img-responsive" />
									<div className="overlay" />
									<a href="images/gallery/gallery_11.jpg" data-rel="lightcase:myCollection">
										<img src="images/gallery/gallery-icon.png" alt="gallery icon" className="img-responsive" />
									</a>
								</div>{/* gallery-item */}
								<div className="gallery-item grid-item grid-item--width2">
									<img src="images/gallery/gallery_12.jpg" alt="gallery image" className="img-responsive" />
									<div className="overlay" />
									<a href="images/gallery/gallery_12.jpg" data-rel="lightcase:myCollection">
										<img src="images/gallery/gallery-icon.png" alt="gallery icon" className="img-responsive" />
									</a>
								</div>{/* gallery-item */}
							</div>{/* gallery items */}
							<a href="#" className="gallery-button default-button">lord more photos</a>
						</div>{/* container */}
					</div>{/* overlay */}
				</section>

				<section className="home-blog home-blog-two padding-120">
					<div className="container">
						<div className="section-header text-center">
							<h3>From Our Blog</h3>
							<p><em>Quickly harness dynamic thinking through value added models.</em></p>
						</div>
						<div className="row">
							<div className="col-md-6 col-sm-12 col-xs-12">
								<div className="blog-item">
									<div className="image">
										<a href="single.html"><img src="images/blog/home_blog_04.jpg" alt="Blog image" className="img-responsive" /></a>
									</div>{/* image */}
									<div className="blog-content">
										<div>
											<ul className="post-meta">
												<li><a href="#"><span>24</span>December, 2017</a></li>
												<li><span className="icon flaticon-user" /><a href="#">by admin</a></li>
												<li><span className="icon flaticon-like" /><a href="#">12 Like</a></li>
												<li><span className="icon flaticon-chat" /><a href="#">24 Comment</a></li>
											</ul>{/* post-meta */}
											<div className="content">
												<h4><a href="single.html">actualze cententrc staled creative</a></h4>
												<p>Completelly actuaze cent centric coloration and idea saharing without installed an base awesome theme of event aresources
													creative and awesome event template.</p>
												<a href="single.html" className="default-button">Read More</a>
											</div>{/* content */}
										</div>
									</div>{/* blog-content */}
								</div>{/* blog item */}
							</div>
							<div className="col-md-6 col-sm-12 col-xs-12">
								<div className="blog-item">
									<div className="image">
										<a href="single.html"><img src="images/blog/home_blog_05.jpg" alt="Blog image" className="img-responsive" /></a>
									</div>{/* image */}
									<div className="blog-content">
										<div>
											<ul className="post-meta">
												<li><a href="#"><span>24</span>December, 2017</a></li>
												<li><span className="icon flaticon-user" /><a href="#">by admin</a></li>
												<li><span className="icon flaticon-like" /><a href="#">12 Like</a></li>
												<li><span className="icon flaticon-chat" /><a href="#">24 Comment</a></li>
											</ul>{/* post-meta */}
											<div className="content">
												<h4><a href="single.html">Competely actua cententric staled base</a></h4>
												<p>Completelly actuaze cent centric coloration and idea saharing without installed an base awesome theme of event aresources
													creative and awesome event template.</p>
												<a href="single.html" className="default-button">Read More</a>
											</div>{/* content */}
										</div>
									</div>{/* blog-content */}
								</div>{/* blog item */}
							</div>
						</div>{/* row */}
					</div>{/* container */}
				</section>

				<section className="home-map">
					<div id="home-map" className="map" />
				</section>

				<section className="newsletter">
					<div className="container">
						<p>Join Our Newsletter</p>
						<form action="/">
							<input type="email" name="email" placeholder="Enter your e-mail here" />
							<input type="submit" name="submit" defaultValue="Subscribe now" />
						</form>
					</div>{/* container */}
				</section>
			</Page>
		);
	}
}
