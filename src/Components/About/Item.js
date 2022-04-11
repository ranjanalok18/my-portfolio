import React, { Component } from "react";
import { Row, Col } from "mdbreact";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    // Description of Work
    let description = "";
    if (this.state.item.description.length) {
      description = this.state.item.description.map((item, index) => (
        <li key={Math.random()}>{item}</li>
      ));
    }
    // Awards provided by the company
    let award = "";
    let titleAward = "";
    if (this.state.item.awards.length) {
      titleAward = (
        <h6>
          <b>Award</b>
        </h6>
      );
      award = this.state.item.awards.map((item, index) => (
        <li key={Math.random() + 1}>{item}</li>
      ));
    }
    // Rabbler Job Description
    let titleResponsibilty = "";
    let responsibilty = "";
    if (this.state.item.responsibilty.length) {
      titleResponsibilty = (
        <h6>
          <b>Responsibilty</b>
        </h6>
      );
      responsibilty = this.state.item.responsibilty.map((item, index) => (
        <li key={Math.random() + 2}>{item}</li>
      ));
    }
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
                {this.state.item.abstract}
              </span>
            </p>
            <span className="text-muted ml-4">
              <ul>{description}</ul>
            </span>
            <span className="text-muted ml-4">
              {titleAward}
              <ul>{award}</ul>
            </span>
            <span className="text-muted ml-4">
              {titleResponsibilty} <ul>{responsibilty}</ul>
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Item;
