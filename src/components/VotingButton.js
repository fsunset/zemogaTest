import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';


const VotingButton = ({ buttonWrapper = false, wrapperCss = null, classCSS = null, iconVariant }) => {
	const [selected, setSelected] = useState(false);

	let iconsList = {
		faThumbsUp: faThumbsUp,
		faThumbsDown: faThumbsDown
	}
	
	if (buttonWrapper) {
		return (
			<button onClick={ () => setSelected(!selected) } className={ !selected ? wrapperCss : wrapperCss + " selected" }>
				<FontAwesomeIcon icon={ iconsList[iconVariant] } className={ classCSS } />
			</button>
		)
	}

	return (
		<FontAwesomeIcon icon={ iconsList[iconVariant] } className={ classCSS } />
	)
}

export default VotingButton;
