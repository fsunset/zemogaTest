import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';


const AlertComponent = ({ classCSS = null, variant, content, button = null }) => {
	const [show, setShow] = useState(true);

		return(
			<Alert className={ classCSS } show={ show } variant={ variant } onClose={ () => setShow(false) } dismissible>
				{ content }

				{ button ? <Button variant="outline-dark">Submit a Name</Button> : ''}
			</Alert>
		);

}

export default AlertComponent;
