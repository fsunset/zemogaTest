import React from 'react';
import { Card, Button } from 'react-bootstrap';
import VotingButton from '../components/VotingButton';


const BoxComponent = (params) => {
	return (
		<div className="col-md-5 col-sm-12">
			<Card className={ params.photo ? 'text-white bg-img-' + params.photo : 'text-white' }>
				<Card.Body>
					<Card.Title className="clearfix">
						<span className={ params.popularity === "up" ? "btn-green" : "btn-yellow" }>
							<VotingButton
								classCSS={"icon-custom-small white-text" }
								iconVariant={ "faThumbs" + params.popularity.charAt(0).toUpperCase() + params.popularity.slice(1) }
							/>
						</span>
						<span>
							{ params.name }
						</span>
					</Card.Title>

					<Card.Subtitle className="mb-2">
						{ params.lastActive } <span>in</span> { params.field }
					</Card.Subtitle>

					<Card.Text>
						{ params.text }
					</Card.Text>

					<div className="container">
						<span className="action-btn btn-green">
							<VotingButton
								classCSS={"icon-custom-small white-text" }
								iconVariant="faThumbsUp"
							/>
						</span>

						<span className="action-btn btn-yellow">
							<VotingButton
								classCSS={"icon-custom-small white-text" }
								iconVariant="faThumbsDown"
							/>
						</span>

						<Button variant="outline-light" size="sm">Vote now</Button>
					</div>

					<div className="votes-bar-container">
						<div className={ "btn-green votes-up width-" + params.voting_results.up }>
							<p>
								<VotingButton
									classCSS="icon-custom-medium white-text"
									iconVariant="faThumbsUp"
								/>
								<span>{ params.voting_results.up }%</span>
							</p>
						</div>
						<div className={ "text-right btn-yellow votes-down width-" + params.voting_results.down }>
							<p>
								<span>{ params.voting_results.down }%</span>
								<VotingButton
									classCSS="icon-custom-medium white-text"
									iconVariant="faThumbsDown"
								/>
							</p>
						</div>
					</div>
				</Card.Body>
			</Card>
		</div>
	)
}

export default BoxComponent;
