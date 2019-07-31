import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


const Header = () => (
	<header>
		<Navbar bg="light" expand="lg">
			<Link to="/" className="navbar-brand">Rule of Thumb.</Link>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Link to="/past-trials" className="nav-link">Past Trials</Link>
					<Link to="/how-it-works" className="nav-link">How It Works</Link>
					<Link to="/login" className="nav-link">Log In / Sign Up</Link>
				</Nav>
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-success">Search</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	</header>
);

export default Header;
