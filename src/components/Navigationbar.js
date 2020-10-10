import React from 'react';
import {Navbar, DropdownButton, Dropdown} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../App.css'

export default function Navigationbar(){
    return(
        <React.Fragment>
                <Navbar className="navbar" fixed="top" expand='lg' variant='dark' bg='info'>
                    <Container fluid>
                        <Navbar.Brand href='/'>Portfolio</Navbar.Brand>
                        <DropdownButton alignRight id="dropdown-basic-button" title="Menu" variant="outline-light">
                            <Dropdown.Item href="/">Home</Dropdown.Item>
                            <Dropdown.Item href="/About">About</Dropdown.Item>
                            <Dropdown.Item href="/Contact">Contact Me</Dropdown.Item>
                        </DropdownButton>
                    </Container>
                </Navbar>
        </React.Fragment>
    )
}