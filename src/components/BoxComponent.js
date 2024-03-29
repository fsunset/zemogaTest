import React, { useState, useEffect } from 'react';
import { Cookies } from "react-cookie";
import { Card, Button, Fade } from 'react-bootstrap';
import VotingButtonComponent from '../components/VotingButtonComponent';


const BoxComponent = (props) => {
	const cookies = new Cookies(),
		  votingCookie = cookies.get("usersVotes_" + props.id);

	// *** For accounting new votes
	const newVotesInitialState = votingCookie ?
		{
			voteUp: parseInt(votingCookie.voteUp),
			voteDown: parseInt(votingCookie.voteDown)
		}
	:
		{
			voteUp: parseInt(props.voting_results.up),
			voteDown: parseInt(props.voting_results.down)
		}
	;
	const [newVotes, setNewVotes] = useState(newVotesInitialState);
	
	// *** For the rest of info we need
	const { voteUp, voteDown } = newVotes,
		[votingInfo, setVotingInfo] = useState({
			selected: false,
			votingBtntext: "Vote now",
			buttonsHidden: false,
			boxMessage: props.text
		}),
		{ selected, votingBtntext, buttonsHidden, boxMessage } = votingInfo;

	// *** Create cookie with voting info
	useEffect(() => {
		const cookies = new Cookies()
		cookies.set("usersVotes_" + props.id, JSON.stringify(newVotes), { path: '/' })
	}, [newVotes]);

	const handleSetVoteClick = (e, keyid) => {
		return (
			setVotingInfo({
				...votingInfo,
				selected: keyid
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

			if (selected === "voteUp") {
				return (
					setNewVotes({
						voteUp: parseInt(voteUp + 1),
						voteDown: parseInt(voteDown - 1)
					})
				)
			} else if (selected === "voteDown") {
				return (
					setNewVotes({
						voteUp: parseInt(voteUp - 1),
						voteDown: parseInt(voteDown + 1)
					})
				)
			}
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
							<span id="buttonsContainer" className="buttons-container">
								<VotingButtonComponent
									buttonWrapper={ true }
									wrapperCss={ selected !== "voteUp" ? "action-btn btn-green" : "action-btn btn-green selected" }
									onClickEvent={ e => handleSetVoteClick(e, "voteUp") }
									ariaControls="setVoteButton"
									ariaExpanded={ selected }
									classCSS={ "icon-custom-small white-text" }
									iconVariant="faThumbsUp"
								/>

								<VotingButtonComponent
									buttonWrapper={ true }
									wrapperCss={ selected !== "voteDown" ? "action-btn btn-yellow" : "action-btn btn-yellow selected" }
									onClickEvent={ e => handleSetVoteClick(e, "voteDown") }
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
						<div className={ "btn-green votes-up width-" + voteUp }>
							<p>
								<VotingButtonComponent
									classCSS="icon-custom-medium white-text"
									iconVariant="faThumbsUp"
								/>
								<span>{ voteUp }%</span>
							</p>
						</div>
						<div className={ "text-right btn-yellow votes-down width-" + voteDown }>
							<p>
								<span>{ voteDown }%</span>
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
