import React, { Component } from "react";
import { Row, Col } from "mdbreact";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <div className="about-item">
        <Row>
          <Col sm="3">
            <div className="circle" />
            <h6>{this.state.item.time}</h6>
          </Col>
          <Col sm="9">
            <h6>
              <b>{this.state.item.title}</b>, {this.state.item.position}
            </h6>
            <p>
              <span className="text-muted ml-4">
                {this.state.item.description}
              </span>
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Item;
