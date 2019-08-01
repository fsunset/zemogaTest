import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Home = () => (
	<section className="jumbotron no-padding-x">
		<div className="container">
			<div className="col-lg-5 col-md-12 no-padding-x box white-text">
				<h2>
					<small>What's your opinion on</small>
					<span>Pope Francis?</span>
				</h2>
				<p>
					He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
				</p>

				<p className="wiki-custom-icon">
					<span>W</span>
					<a href="https://en.wikipedia.org/wiki/Pope_Francis" target="_blank" rel="noopener noreferrer" className="white-text no-padding-x">
						More information
					</a>
				</p>

				<p className="strong-text">What's your veredict? </p>

				<Container>
					<div className="row">
						<div className="col-sm-6 text-center btn-green">
							<FontAwesomeIcon icon={ faThumbsUp } className="icon-custom-size white-text" />
						</div>
						<div className="col-sm-6 text-center btn-yellow">
							<FontAwesomeIcon icon={ faThumbsDown } className="icon-custom-size white-text" />
						</div>
					</div>
				</Container>
			</div>
		</div>
	</section>
);

export default Home;
