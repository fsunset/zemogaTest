import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Alert from '../components/AlertComponent';
import BoxComponent from '../components/BoxComponent';


const Home = () => {
	function VotingBoxes() {
		let data = require('../DataJson.json');

		const boxes = data.results.map((person) =>
			<BoxComponent
				key={ person.id }
				name={ person.name }
				field={ person.field }
				lastActive={ person.last_active }
				text={ person.text }
				photo={ person.img_name }
			/>
		);

		return(boxes);
	}

	return (
		<React.Fragment>
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
								<div className="col-sm-6 text-center btn-yellow flipped-x-axis">
									<FontAwesomeIcon icon={ faThumbsDown } className="icon-custom-size white-text" />
								</div>
							</div>
						</Container>
					</div>
				</div>
			</section>

			<div className="container">
				<Alert
					classCSS="clearfix"
					variant="secondary"
					content={[
						<React.Fragment key="a_1">
							<h2>
								<small>Speak out. Be heard.</small>
								Be counted
							</h2>
							<small>
								Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
							</small>
						</React.Fragment>
					]}
					button={ true }
				/>
			</div>

			<div className="container boxes-container">
				<h2>Votes</h2>

				<div className="row offset-md-1">
					<VotingBoxes />
				</div>
			</div>
		</React.Fragment>
	);
}

export default Home;
