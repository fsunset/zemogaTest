import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter } from "@fortawesome/free-brands-svg-icons";



const Footer = () => (
	<footer className="container">
		<p className="float-right">
			Follow Us
			<FontAwesomeIcon icon={ faFacebookSquare } className="social-icon" />
			<FontAwesomeIcon icon={ faTwitter } className="social-icon" />
		</p>
		<p>
			<a href="/">Terms and Conditions</a>
			<a href="/">Privacy Policy</a>
			<a href="/">Contact Us</a>
		</p>
	</footer>
);

export default Footer;
