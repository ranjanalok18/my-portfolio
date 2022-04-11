import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="profile-image">
          <img height="420px" src="profileImage.png" />
        </div>
        <div className="name-position-container">
          <div className="name">Alok Ranjan</div>
          <div className="position">Software Engineer</div>
        </div>
      </div>
    );
  }
}

export default Profile;
