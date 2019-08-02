import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';


const VotingButton = ({ classCSS = null, iconVariant }) => {
	let iconsList = {
		faThumbsUp: faThumbsUp,
		faThumbsDown: faThumbsDown
	}

	return (
		<FontAwesomeIcon icon={ iconsList[iconVariant] } className={ classCSS } />
	)
}

export default VotingButton;
