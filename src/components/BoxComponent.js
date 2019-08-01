import React from 'react';
import { Card } from 'react-bootstrap';


const BoxComponent = (params) => {
return (
	<div className="col-md-5 col-sm-12">
		<Card className={ params.photo ? 'text-white bg-img-' + params.photo : 'text-white' }>
			{/*<Card.Img src={`../img/${params.photo}`} alt={ params.name + " Photo"} />*/}
			<Card.Body>
				<Card.Title>{ params.name }</Card.Title>
				<Card.Subtitle className="mb-2">
					{ params.lastActive } <span>in</span> { params.field }
				</Card.Subtitle>

				<Card.Text>
					{ params.text }
				</Card.Text>
				
				<Card.Link href="#">Card Link</Card.Link>
				<Card.Link href="#">Another Link</Card.Link>
			</Card.Body>
		</Card>
	</div>
)
}

export default BoxComponent;