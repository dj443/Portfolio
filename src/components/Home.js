import React from 'react';
import {Container, Card, CardDeck, Button, Image} from 'react-bootstrap';
import "../App.css";

export default function Home(props){
    return(
        <React.Fragment>
            <Container className="introCard content" fluid>
                <CardDeck>
                    <Card className="card">
                        <Card.Header className="cardHeader">
                            <Card.Title>DJ and Chelsea Lancaster</Card.Title>
                        </Card.Header>
                        <Image fluid src={require("../images/DJandChels.jpg")} />
                        <Card.Body>
                            <Card.Text>This is where I will write about myself.</Card.Text>
                            <Button size="md" variant="outline-info" href="/about">About Me</Button>
                        </Card.Body>
                    </Card>
                    <Card className="card">
                        <Card.Header className="cardHeader">
                            <Card.Title>Component Example Builds</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text className="listText">These are Components that I have created as demonstrations</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button className="button" size="md" variant="outline-info" href="/Sliders">Sliders</Button>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Container>
            <Container className="linkCards content" fluid>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={require("../images/comingSoon.jpg")} />
                        <Card.Body>
                            <Card.Title>FirstProject</Card.Title>
                            <Card.Text>Here is where I will talk about this project</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted" href="">www.linktosite.com</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={require("../images/comingSoon.jpg")} />
                        <Card.Body>
                            <Card.Title>Second Project</Card.Title>
                            <Card.Text>Here is where I will talk about this project</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted" href="">www.linktoSecondsite.com</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={require("../images/comingSoon.jpg")} />
                        <Card.Body>
                            <Card.Title>Third Project</Card.Title>
                            <Card.Text>Here is where I will talk about this project</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted" href="">www.linktoThirdsite.com</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Container>
        </React.Fragment>
    )
}    
    
