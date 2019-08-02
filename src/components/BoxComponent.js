import React from 'react';
import { Card, Button } from 'react-bootstrap';
import VotingButton from '../components/VotingButton';


const BoxComponent = (props) => {
	return(
		<div className="col-md-5 col-sm-12">
			<Card className={ props.photo ? 'text-white bg-img-' + props.photo : 'text-white' }>
				<Card.Body>
					<Card.Title className="clearfix">
						<span className={ props.popularity === "up" ? "btn-green" : "btn-yellow" }>
							<VotingButton
								classCSS={"icon-custom-small white-text" }
								iconVariant={ "faThumbs" + props.popularity.charAt(0).toUpperCase() + props.popularity.slice(1) }
							/>
						</span>
						<span>
							{ props.name }
						</span>
					</Card.Title>

					<Card.Subtitle className="mb-2">
						{ props.lastActive } <span>in</span> { props.field }
					</Card.Subtitle>

					<Card.Text>
						{ props.text }
					</Card.Text>

					<div className="container">
						<VotingButton
							buttonWrapper={ true }
							wrapperCss="action-btn btn-green"
							classCSS={ "icon-custom-small white-text" }
							iconVariant="faThumbsUp"
						/>

						<VotingButton
							buttonWrapper={ true }
							wrapperCss="action-btn btn-yellow"
							classCSS={ "icon-custom-small white-text" }
							iconVariant="faThumbsDown"
						/>

						<Button variant="outline-light" size="sm">Vote now</Button>
					</div>

					<div className="votes-results-bar-container">
						<div className={ "btn-green votes-up width-" + props.voting_results.up }>
							<p>
								<VotingButton
									classCSS="icon-custom-medium white-text"
									iconVariant="faThumbsUp"
								/>
								<span>{ props.voting_results.up }%</span>
							</p>
						</div>
						<div className={ "text-right btn-yellow votes-down width-" + props.voting_results.down }>
							<p>
								<span>{ props.voting_results.down }%</span>
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
