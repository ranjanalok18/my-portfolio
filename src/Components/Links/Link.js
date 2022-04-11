import React, { Component } from "react";
import Item from "./Item";

class Links extends Component {
  render() {
    return (
      <div className="link-container">
        <div className="links">
          <Item icon="linkedin" href="#" />
          <Item icon="envelope" href="#" />
          <Item icon="github" href="#" />
        </div>
      </div>
    );
  }
}

export default Links;
