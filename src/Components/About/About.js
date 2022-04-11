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
            description: `• Front-End development using VueJs with Vuetify and RESTAPI and GraphQL via Apollo Client.
                          • Using Vuex and migrated state-management form Event-Bus implementation.
                          • Development based on Rappid.Js and Joint.Js for Floor Planning and Designs
                          • Building modular and reusable components, reactivity, and libraries
                          • Proficient with the JavaScript language and its modern ES6+ syntax and features
                          • Proficiency with modern development tools, like Babel, Webpack, and Git
                          • Performed a mix of maintenance, enhancements, and new development as required
                          • Developing websites in PHP frameworks like Laravel.
                          • Worked with a team of senior and other PHP developers, UI developers, and testers
                          • Worked cross-functionally to convert business needs into technical specifications`,
            time: "Nov. 2018– Present",
          }}
        />
        <Item
          item={{
            title: "RABBLER, NOIDA",
            position: "ASSOCIATE SOFTWARE DEVELOPER",
            description: `• Learned different technologies by pairing with experienced engineer.
• Designed, built, and tested the core components of the platform.
• Investigated solutions to platform requirements.
• Assisted in tools creation to improve supportability.`,
            time: "Jan 2016 – March 2017",
          }}
        />
        <h5 className="pb-2">Education</h5>
        <Item
          item={{
            title: "CDAC-HYDERABAD",
            position: "PG-DIPLOMA",
            description: `Post Graduate Diploma in System Software Development (PG DSSD) giving emphasis to secure software design
& implementation practices as per the industry needs. Passed with 70.25%`,
            time: "Feb 2018",
          }}
        />
        <Item
          item={{
            title: "VISHVESHWARYA INST. OF TECHNOLOGY",
            position: "BACHELOR OF TECHNOLOGY",
            description: `Bachelor of Technology in Computer Science & Engineering with 58.12%.`,
            time: "June 2016",
          }}
        />
        <Item
          item={{
            title: "NIOS",
            position: "XII",
            description: `XII in PCM Stream with 66.66%.`,
            time: "June 2010",
          }}
        />
        <Item
          item={{
            title: "CITY MONTESSORI SCHOOL",
            position: "X",
            description: `X with 70.56%.`,
            time: "June 2007",
          }}
        />
      </div>
    );
  }
}

export default About;
