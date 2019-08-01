import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Header = () => (
	<header>
		<Navbar expand="lg" className="fixed-top">
			<Container>
				<Link to="/" className="navbar-brand white-text">Rule of Thumb.</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
					<Nav>
						<Link to="/past-trials" className="nav-link white-text">Past Trials</Link>
						<Link to="/how-it-works" className="nav-link white-text">How It Works</Link>
						<Link to="/login" className="nav-link white-text">Log In / Sign Up</Link>

						<FontAwesomeIcon icon={ faSearch } className="icon-custom-size white-text" />
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	</header>
);

export default Header;
