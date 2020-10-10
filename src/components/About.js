import React from 'react';
import { Card, Container, CardColumns, Jumbotron } from 'react-bootstrap';
import '../App.css';

export default function About(){
    return(
        <React.Fragment>
            <Container className="about content" fluid>
                <Jumbotron className="about-header">
                    <h1>DJ Lancaster</h1>
                    <p>MERN Stack Web Developer</p>
                </Jumbotron>
            </Container>
            <Container className="about content" fluid>
                <CardColumns>
                    <Card>
                        <Card.Img variant="top" src={require("../images/comingSoon.jpg")} />
                        <Card.Body>
                            <Card.Title>Marine Corps Veteran</Card.Title>
                            <Card.Text>
                                This is where I will talk about my Marine Corps career
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                “Some people spend an entire lifetime wondering if they made a difference in the world. But, the Marines don’t have that problem.”
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">~Ronald Reagan, President of the United States</small>
                        </Card.Footer> 
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title>Long Career Journey</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Hard to find a good career
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title>
                                Mr Reliable
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Img src={require("../images/comingSoon.jpg")} />
                        </Card.Body>
                        <Card.Footer>
                            Link to something?
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                No-one ever got anywhere without grinding. Embrace the grind.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">DJ Lancaster</small>
                        </Card.Footer>
                    </Card>
                </CardColumns>
            </Container>
            <Container className="about content" fluid>
                <Jumbotron className="story">
                   <Container>
                   <h1>My Story so far!</h1>
                    <p>
                        This is where I will write my short story. For now its going to be some Lorem Ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum iaculis lorem, a blandit arcu accumsan vitae. Vestibulum malesuada odio a diam aliquet dignissim. Proin non nisl ornare, dapibus arcu ut, congue dui. Curabitur facilisis porttitor dui, id ultricies lectus luctus vel. In hac habitasse platea dictumst. Vivamus a odio maximus, elementum lorem at, elementum sem. Nunc sagittis varius arcu quis mattis.   Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi pulvinar nunc ut massa dapibus sollicitudin. Integer elit ligula, placerat sed elit id, eleifend pretium nisl. Cras sagittis pellentesque dolor, nec luctus purus vehicula id. Nulla volutpat id nisl sit amet accumsan. Sed tincidunt elit id faucibus vehicula. Donec ultrices tellus eu massa vestibulum dignissim non eget nulla. Nam commodo, sem ut interdum dapibus, velit est consectetur justo, ut pharetra nisl tortor non nisi. Proin consequat finibus erat. Phasellus eu fringilla nunc. Pellentesque et urna nisl. Nullam hendrerit efficitur libero, vel sagittis sapien.
                    </p>
                   </Container>
                </Jumbotron>
            </Container>
        </React.Fragment>
    )
}