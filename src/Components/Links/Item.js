import React, { Component } from "react";
import { MDBIcon } from "mdbreact";

class LinkItem extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <div className="link-item">
        <a href={this.state.href}>
          <MDBIcon icon={this.state.icon} size="lg" />
        </a>
      </div>
    );
  }
}

export default LinkItem;
