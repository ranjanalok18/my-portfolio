import React, { Component } from "react";
import Item from "./Item";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h5 className="pb-2">Work Experience</h5>
        <Item
          item={{
            title: "ETELLIGENS TECHNOLOGIES, NOIDA",
            position: "SOFTWARE DEVELOPER",
            description: "NA",
            time: "NOV. 2018– PRESENT",
          }}
        />
        <Item
          item={{
            title: "RABBLER, NOIDA",
            position: "ASSOCIATE SOFTWARE DEVELOPER",
            description: "NA",
            time: "JAN 2016 – MARCH 2017",
          }}
        />
      </div>
    );
  }
}

export default About;
