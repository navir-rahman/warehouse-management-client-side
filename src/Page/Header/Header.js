import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

            <Navbar bg="light" expand="lg"sticky="top" >
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                             <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                             <Nav.Link as={Link} to={"/allitems"}>Inventory</Nav.Link>


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

    );
};

export default Header;