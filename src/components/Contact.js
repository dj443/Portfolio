import React from 'react';
import { Container, Form } from 'react-bootstrap';
import "../App.css";

export default function Contact(){
    return(
        <React.Fragment>
            <Container className="contact content" fluid>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Whats your name?</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>What company are you with?</Form.Label>
                        <Form.Control type="text" placeholder="Company Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Let me know what you think of my site!</Form.Label>
                        <Form.Control type="text" placeholder="Helpful tips go here!" />
                    </Form.Group>
                </Form>
            </Container>
        </React.Fragment>
    )
}