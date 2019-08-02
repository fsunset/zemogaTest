import React, { useState } from 'react';
import { Card, Button, Fade } from 'react-bootstrap';
import VotingButtonComponent from '../components/VotingButtonComponent';


const BoxComponent = (props) => {
	const [selected, setSelected] = useState(false);

	const handleClickEvent = (e, keyid) => {
		setSelected(keyid);
	}

	return (
		<div className="col-md-5 col-sm-12">
			<Card className={ props.photo ? 'text-white bg-img-' + props.photo : 'text-white' }>
				<Card.Body>
					<Card.Title className="clearfix">
						<span className={ props.popularity === "up" ? "btn-green" : "btn-yellow" }>
							<VotingButtonComponent
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

					<Card.Text>{ props.text }</Card.Text>

					<div className="container">
						<VotingButtonComponent
							buttonWrapper={ true }
							wrapperCss={ selected !== "faThumbsUp" ? "action-btn btn-green" : "action-btn btn-green selected" }
							onClickEvent={ e => handleClickEvent(e, "faThumbsUp") }
							ariaControls="setVoteButton"
							ariaExpanded={ selected }
							classCSS={ "icon-custom-small white-text" }
							iconVariant="faThumbsUp"
						/>

						<VotingButtonComponent
							buttonWrapper={ true }
							wrapperCss={ selected !== "faThumbsDown" ? "action-btn btn-yellow" : "action-btn btn-yellow selected" }
							onClickEvent={ e => handleClickEvent(e, "faThumbsDown") }
							ariaControls="setVoteButton"
							ariaExpanded={ selected }
							classCSS={ "icon-custom-small white-text" }
							iconVariant="faThumbsDown"
						/>

						<Fade in={ !selected ? false : true }>
							<Button id="setVoteButton" variant="outline-light" size="sm">
								Vote now
							</Button>
						</Fade>
					</div>

					<div className="votes-results-bar-container">
						<div className={ "btn-green votes-up width-" + props.voting_results.up }>
							<p>
								<VotingButtonComponent
									classCSS="icon-custom-medium white-text"
									iconVariant="faThumbsUp"
								/>
								<span>{ props.voting_results.up }%</span>
							</p>
						</div>
						<div className={ "text-right btn-yellow votes-down width-" + props.voting_results.down }>
							<p>
								<span>{ props.voting_results.down }%</span>
								<VotingButtonComponent
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
