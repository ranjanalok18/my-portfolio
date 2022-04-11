import React, { Component } from "react";
import Profile from "./Profile";
import Links from "./Links/Link";

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-content-container">
          <Profile />
          <Links />
          <div className="bio">
            Seeking a position where I can utilize my knowledge, abilities and
            personal skills while being resourceful, innovative, and flexible
            that offers professional growth along with the organization.
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
