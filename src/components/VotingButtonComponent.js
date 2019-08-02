import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';


const VotingButtonComponent = ({ buttonWrapper = false, wrapperCss = null, onClickEvent, ariaControls, ariaExpanded, classCSS = null, iconVariant }) => {

	let iconsList = {
		faThumbsUp: faThumbsUp,
		faThumbsDown: faThumbsDown
	}
	
	if (buttonWrapper) {
		return (
			<button
				onClick={ onClickEvent }
				keyid={ iconVariant }
				className={ wrapperCss }
				aria-controls={ ariaControls }
				aria-expanded={ ariaExpanded }
			>
				<FontAwesomeIcon icon={ iconsList[iconVariant] } className={ classCSS } />
			</button>
		)
	}

	return (
		<FontAwesomeIcon icon={ iconsList[iconVariant] } className={ classCSS } />
	)
}

export default VotingButtonComponent;
