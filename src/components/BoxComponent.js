import React, { useState } from 'react';
import { Card, Button, Fade } from 'react-bootstrap';
import VotingButtonComponent from '../components/VotingButtonComponent';


const BoxComponent = (props) => {
	const [votingInfo, setVotingInfo] = useState({
			selected: false,
			votingBtntext: "Vote now",
			buttonsHidden: false,
			boxMessage: props.text
		}),
		{ selected, votingBtntext, buttonsHidden, boxMessage } = votingInfo;

	const handleSetVoteClick = (e, keyid) => {
		return (
			setVotingInfo({
				selected: keyid,
				votingBtntext: "Vote now",
				buttonsHidden: false,
				boxMessage: props.text
			})
		)
	}

	const handleVoting = () => {
		if (!buttonsHidden) {
			setVotingInfo({
				selected: selected,
				votingBtntext: "Vote again",
				buttonsHidden: true,
				boxMessage: "Thank you for voting!"
			})
		} else {
			setVotingInfo({
				selected: false,
				votingBtntext: "Vote now",
				buttonsHidden: false,
				boxMessage: props.text
			})
		}
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

					<Card.Text>{ boxMessage }</Card.Text>

					<div className="container">
						<Fade in={ !buttonsHidden }>
							<span id="buttonsContainer">
								<VotingButtonComponent
									buttonWrapper={ true }
									wrapperCss={ selected !== "faThumbsUp" ? "action-btn btn-green" : "action-btn btn-green selected" }
									onClickEvent={ e => handleSetVoteClick(e, "faThumbsUp") }
									ariaControls="setVoteButton"
									ariaExpanded={ selected }
									classCSS={ "icon-custom-small white-text" }
									iconVariant="faThumbsUp"
								/>

								<VotingButtonComponent
									buttonWrapper={ true }
									wrapperCss={ selected !== "faThumbsDown" ? "action-btn btn-yellow" : "action-btn btn-yellow selected" }
									onClickEvent={ e => handleSetVoteClick(e, "faThumbsDown") }
									ariaControls="setVoteButton"
									ariaExpanded={ selected }
									classCSS={ "icon-custom-small white-text" }
									iconVariant="faThumbsDown"
								/>
							</span>
						</Fade>

						<Fade in={ !selected ? false : true }>
							<Button
								id="setVoteButton"
								onClick={ handleVoting }
								variant="outline-light"
								size="sm"
								aria-controls="buttonsContainer"
								aria-expanded={ true }
								className={ buttonsHidden ? "voting-btn left-aligned" : "voting-btn" }
							>
								{ votingBtntext }
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
