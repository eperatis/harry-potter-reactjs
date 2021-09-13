import React from "react";
import { Col, Container, Row } from "react-bootstrap";

class Homepage extends React.Component {
    render() {
        return (
            <Container fluid resposive>
                <Row>
                    <Col>Thanks for wisiting my little project!</Col>
                </Row>
                <Row>
                    <Col>It's created with ReactJS and the <a class="btn-outline-primary" href="https://hp-api.herokuapp.com/" target="_blank"><i>back-end</i></a> part is already created by someone.</Col>
                </Row>
                <Row>
                    <Col>If you are here to check the code, you can see <a class="btn-outline-primary" href="https://github.com/eperatis/harry-potter-reactjs" target="_blank"><i>here</i></a>, if you intrested you can check my other <a class="btn-outline-primary" href="https://github.com/eperatis" target="_blank"><i>github</i></a> projects.</Col>
                </Row>
            </Container>
        );
    }
}

export default Homepage;