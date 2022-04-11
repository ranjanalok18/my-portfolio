import React, { Component } from "react";
import { Container, Col, Row } from "mdbreact";
import SideBar from "./SideBar";
import Main from "./Main";

class Index extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="12" lg="5" xl="4">
            <SideBar />
          </Col>
          <Col md="12" lg="7" xl="8">
            <Main />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Index;
