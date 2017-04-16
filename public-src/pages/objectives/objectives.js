import styles from './objectives.scss';
import classes from 'app-utils/classes';

import React, { Component } from 'react';
import Category from 'app-components/category/category';
import Page from 'app-components/page/page';
import Table from 'app-components/table/table';

export default class Landing extends Component {
	render() {
		return (
			<Page className={ styles.main }>
				<section className="banner-three">
					<div className="banner-overlay">
						<div className="container">
							<div className="banner-content">
								<Table
									className={ styles.nearby }
									title='Nearby'
									headers={[
										{ label: 'Objective', key: 'objective' },
										{ label: 'Location', key: 'location' },
										{ label: 'Points', key: 'points' },
										{ label: 'Rating', key: 'rating' },
									]}
									data={[
										{ objective: 'Singing duet with street performer', location: 'UNR', points: '200', rating: '4.5' },
									]}
								/>
							</div>
						</div>
					</div>
				</section>

				<section className="about about-three padding-120">
					<div className="container">
						<div className="row">
							<div className="col-md-12 col-sm-12 col-xs-12">
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
					</div>
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
											</div>
											<div className="speaker-content">
												<h4><a href="speaker-details.html">robot smith</a></h4>
												<span>Founder</span>
											</div>
										</div>
									</div>
									<div className="col-md-3 col-sm-6 col-xs-12">
										<div className="speaker-item">
											<div className="speaker-image">
												<img src="images/speakers/speaker_10.jpg" alt="speaker image" className="img-responsive" />
											</div>
											<div className="speaker-content">
												<h4><a href="speaker-details.html">janaton smith</a></h4>
												<span>Founder</span>
											</div>
										</div>
									</div>
									<div className="col-md-3 col-sm-6 col-xs-12">
										<div className="speaker-item">
											<div className="speaker-image">
												<img src="images/speakers/speaker_11.jpg" alt="speaker image" className="img-responsive" />
											</div>
											<div className="speaker-content">
												<h4><a href="speaker-details.html">WILLIAM JOHN</a></h4>
												<span>Founder</span>
											</div>
										</div>
									</div>
									<div className="col-md-3 col-sm-6 col-xs-12">
										<div className="speaker-item">
											<div className="speaker-image">
												<img src="images/speakers/speaker_12.jpg" alt="speaker image" className="img-responsive" />
											</div>
											<div className="speaker-content">
												<h4><a href="speaker-details.html">Raisen Aero</a></h4>
												<span>Founder</span>
											</div>
										</div>
									</div>
									<div className="col-md-3 col-sm-6 col-xs-12">
										<div className="speaker-item">
											<div className="speaker-image">
												<img src="images/speakers/speaker_13.jpg" alt="speaker image" className="img-responsive" />
											</div>
											<div className="speaker-content">
												<h4><a href="speaker-details.html">Raisen Aero</a></h4>
												<span>Founder</span>
											</div>
										</div>
									</div>
									<div className="col-md-3 col-sm-6 col-xs-12">
										<div className="speaker-item">
											<div className="speaker-image">
												<img src="images/speakers/speaker_14.jpg" alt="speaker image" className="img-responsive" />
											</div>
											<div className="speaker-content">
												<h4><a href="speaker-details.html">robot smith</a></h4>
												<span>Founder</span>
											</div>
										</div>
									</div>
									<div className="col-md-3 col-sm-6 col-xs-12">
										<div className="speaker-item">
											<div className="speaker-image">
												<img src="images/speakers/speaker_15.jpg" alt="speaker image" className="img-responsive" />
											</div>
											<div className="speaker-content">
												<h4><a href="speaker-details.html">janaton smith</a></h4>
												<span>Founder</span>
											</div>
										</div>
									</div>
									<div className="col-md-3 col-sm-6 col-xs-12">
										<div className="speaker-item">
											<div className="speaker-image">
												<img src="images/speakers/speaker_16.jpg" alt="speaker image" className="img-responsive" />
											</div>
											<div className="speaker-content">
												<h4><a href="speaker-details.html">WILLIAM JOHN</a></h4>
												<span>Founder</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="schedules padding-120">
					<div className="container">
						<div className="section-header text-center">
							<h3>Event Schedules</h3>
							<p><em>Quickly harness dynamic thinking through value added models.</em></p>
						</div>
						<div className="schedule-tabs">

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

							<Table
								headers={[
									{ label: 'Day', key: 'day' },
									{ label: 'Session', key: 'session' },
								]}
								data={[
									{ day: '5', session: 'Foobar' },
								]}
							/>
						</div>
					</div>
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
											</div>
											<div className="pricing-options">
												<div>
													<p>Conference Tickets<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Free Lunch And Coffee<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Easy Access<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Certificate<span className="off"><i className="fa fa-times" aria-hidden="true" /></span></p>
													<p>Printed Metarials<span className="off"><i className="fa fa-times" aria-hidden="true" /></span></p>
													<p>More Options<span className="off"><i className="fa fa-times" aria-hidden="true" /></span></p>
												</div>
											</div>
											<div className="pricing-button">
												<a href="#">ticket now</a>
											</div>
										</div>
									</div>
									<div className="col-md-6 col-sm-12 col-xs-12">
										<div className="pricing-item second">
											<div className="pricing-header">
												<h3 className="name">Personal</h3>
												<h2 className="amount"><sup>$</sup>200</h2>
												<a href="#">ticket now</a>
											</div>
											<div className="pricing-options">
												<div>
													<p>Conference Tickets<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Free Lunch And Coffee<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Easy Access<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Certificate<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Printed Metarials<span className="off"><i className="fa fa-times" aria-hidden="true" /></span></p>
													<p>More Options<span className="off"><i className="fa fa-times" aria-hidden="true" /></span></p>
												</div>
											</div>
											<div className="pricing-button">
												<a href="#">ticket now</a>
											</div>
										</div>
									</div>
									<div className="col-md-6 col-sm-12 col-xs-12">
										<div className="pricing-item third">
											<div className="pricing-header">
												<h3 className="name">business</h3>
												<h2 className="amount"><sup>$</sup>300</h2>
												<a href="#">ticket now</a>
											</div>
											<div className="pricing-options">
												<div>
													<p>Conference Tickets<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Free Lunch And Coffee<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Easy Access<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Certificate<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Printed Metarials<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>More Options<span className="off"><i className="fa fa-times" aria-hidden="true" /></span></p>
												</div>
											</div>
											<div className="pricing-button">
												<a href="#">ticket now</a>
											</div>
										</div>
									</div>
									<div className="col-md-12 col-sm-12 col-xs-12">
										<div className="pricing-item fourth">
											<div className="pricing-header">
												<h3 className="name">PREMIUM</h3>
												<h2 className="amount"><sup>$</sup>500</h2>
												<a href="#">ticket now</a>
											</div>
											<div className="pricing-options">
												<div>
													<p>Conference Tickets<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Free Lunch And Coffee<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Easy Access<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Certificate<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>Printed Metarials<span><i className="fa fa-check" aria-hidden="true" /></span></p>
													<p>More Options<span><i className="fa fa-check" aria-hidden="true" /></span></p>
												</div>
											</div>
											<div className="pricing-button">
												<a href="#">ticket now</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
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
						</div>
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
						</div>
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
						</div>
						<a href="#" className="sponsor-button default-button">become a sponsors</a>
					</div>
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
								</div>
								<div className="gallery-item grid-item">
									<img src="images/gallery/gallery_08.jpg" alt="gallery image" className="img-responsive" />
									<div className="overlay" />
									<a href="images/gallery/gallery_08.jpg" data-rel="lightcase:myCollection">
										<img src="images/gallery/gallery-icon.png" alt="gallery icon" className="img-responsive" />
									</a>
								</div>
								<div className="gallery-item grid-item">
									<img src="images/gallery/gallery_09.jpg" alt="gallery image" className="img-responsive" />
									<div className="overlay" />
									<a href="images/gallery/gallery_09.jpg" data-rel="lightcase:myCollection">
										<img src="images/gallery/gallery-icon.png" alt="gallery icon" className="img-responsive" />
									</a>
								</div>
								<div className="gallery-item grid-item">
									<img src="images/gallery/gallery_10.jpg" alt="gallery image" className="img-responsive" />
									<div className="overlay" />
									<a href="images/gallery/gallery_10.jpg" data-rel="lightcase:myCollection">
										<img src="images/gallery/gallery-icon.png" alt="gallery icon" className="img-responsive" />
									</a>
								</div>
								<div className="gallery-item grid-item">
									<img src="images/gallery/gallery_11.jpg" alt="gallery image" className="img-responsive" />
									<div className="overlay" />
									<a href="images/gallery/gallery_11.jpg" data-rel="lightcase:myCollection">
										<img src="images/gallery/gallery-icon.png" alt="gallery icon" className="img-responsive" />
									</a>
								</div>
								<div className="gallery-item grid-item grid-item--width2">
									<img src="images/gallery/gallery_12.jpg" alt="gallery image" className="img-responsive" />
									<div className="overlay" />
									<a href="images/gallery/gallery_12.jpg" data-rel="lightcase:myCollection">
										<img src="images/gallery/gallery-icon.png" alt="gallery icon" className="img-responsive" />
									</a>
								</div>
							</div>
							<a href="#" className="gallery-button default-button">lord more photos</a>
						</div>
					</div>
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
									</div>
									<div className="blog-content">
										<div>
											<ul className="post-meta">
												<li><a href="#"><span>24</span>December, 2017</a></li>
												<li><span className="icon flaticon-user" /><a href="#">by admin</a></li>
												<li><span className="icon flaticon-like" /><a href="#">12 Like</a></li>
												<li><span className="icon flaticon-chat" /><a href="#">24 Comment</a></li>
											</ul>
											<div className="content">
												<h4><a href="single.html">actualze cententrc staled creative</a></h4>
												<p>Completelly actuaze cent centric coloration and idea saharing without installed an base awesome theme of event aresources
													creative and awesome event template.</p>
												<a href="single.html" className="default-button">Read More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-sm-12 col-xs-12">
								<div className="blog-item">
									<div className="image">
										<a href="single.html"><img src="images/blog/home_blog_05.jpg" alt="Blog image" className="img-responsive" /></a>
									</div>
									<div className="blog-content">
										<div>
											<ul className="post-meta">
												<li><a href="#"><span>24</span>December, 2017</a></li>
												<li><span className="icon flaticon-user" /><a href="#">by admin</a></li>
												<li><span className="icon flaticon-like" /><a href="#">12 Like</a></li>
												<li><span className="icon flaticon-chat" /><a href="#">24 Comment</a></li>
											</ul>
											<div className="content">
												<h4><a href="single.html">Competely actua cententric staled base</a></h4>
												<p>Completelly actuaze cent centric coloration and idea saharing without installed an base awesome theme of event aresources
													creative and awesome event template.</p>
												<a href="single.html" className="default-button">Read More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
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
					</div>
				</section>
			</Page>
		);
	}
}
