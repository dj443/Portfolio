import React from "react";
import { Container, Form, Jumbotron } from "react-bootstrap";

export default function Sliders(props) {
    

    return(
        <React.Fragment>
            <Container fluid className="content">
                <Jumbotron>
                    <Form>
                        <Form.Group controlId="formBasicRange">
                            <Form.Label>Mortgage Amount</Form.Label>
                            <Form.Control type="range" />
                        </Form.Group>
                        <Form.Group controlId="formBasicRange">
                            <Form.Label>APR</Form.Label>
                            <Form.Control type="range" />
                        </Form.Group>
                        <Form.Group controlId="formBasicRange">
                            <Form.Label>Down Payment</Form.Label>
                            <Form.Control type="range" />
                        </Form.Group>
                    </Form>
                </Jumbotron>
            </Container>
        </React.Fragment>
    )
}