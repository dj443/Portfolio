import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { Container, Navbar } from 'react-bootstrap';
import "../App.css"


export default function Footer(porps){
    const gitHub = <FontAwesomeIcon color="white" size="2x" icon={faGithub} />;
    const linkedIn = <FontAwesomeIcon color="white" size="2x" icon={faLinkedin} />;
    //const instagram = <FontAwesomeIcon color="white" size="3x" icon={faInstagram} />;
    const envelope = <FontAwesomeIcon color="white" size="2x" icon={faEnvelope} />

    return(
        <React.Fragment>
            <Container className="footer" fluid>
                <Navbar className="footer" fixed="bottom">
                    <Navbar.Brand href="https://github.com/dj443">{gitHub}</Navbar.Brand>
                    <Navbar.Brand href="www.linkedin.com/in/djlancaster">{linkedIn}</Navbar.Brand>
                    <Navbar.Brand>{envelope}</Navbar.Brand>   
                </Navbar>
            </Container>
        </React.Fragment>
    );
}