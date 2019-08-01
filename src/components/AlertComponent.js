import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';


const AlertComponent = ({ classCSS = null, variant, content, button = false }) => {
	const [show, setShow] = useState(true);

		return(
			<Alert className={ classCSS } show={ show } variant={ variant } onClose={ () => setShow(false) } dismissible>
				{ content }
			</Alert>
		);

}

export default AlertComponent;
