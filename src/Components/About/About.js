import React, { Component } from "react";
import Item from "./Item";

class About extends Component {
  render() {
    const etelligensExperience = [
      "Front-End development using VueJs with Vuetify and RESTAPI and GraphQL via Apollo Client.",
      "Using Vuex and migrated state-management form Event-Bus implementation.",
      "Development based on Rappid.Js and Joint.Js for Floor Planning and Designs.",
      "Building modular and reusable components, reactivity, and libraries.",
      "Proficient with the JavaScript language and its modern ES6+ syntax and features.",
      "Proficiency with modern development tools, like Babel, Webpack, and Git.",
      "Performed a mix of maintenance, enhancements, and new development as required.",
      "Developing websites in PHP frameworks like Laravel.",
      "Worked with a team of senior and other PHP developers, UI developers, and testers.",
      "Worked cross-functionally to convert business needs into technical specifications.",
    ];
    const etelligensAwards = [
      "Awarded KEY CONTRIBUTOR of the Company.",
      "Awarded RISING STAR of the Company.",
    ];
    const rabblerExperience = [
      // WORK EXPERIENCE
      "Learned different technologies by pairing with experienced engineer.",
      "Designed, built, and tested the core components of the platform.",
      "Investigated solutions to platform requirements.",
      "Assisted in tools creation to improve supportability.",
    ];
    const rabblerResponsibilty = [
      "Collaborated with cross-functional teams.",
      "Maintained and evolved in back-end infrastructure.",
      "Quality Assurance of the Application with Manual Testing.",
      "Ensuring that the application met functional and design specification.",
    ];
    return (
      <div className="about">
        <h5 className="pb-2">Work Experience</h5>
        <Item
          item={{
            title: "ETELLIGENS TECHNOLOGIES, NOIDA",
            position: "SOFTWARE DEVELOPER",
            abstract: `Working on Technologies like Vue.Js, Rappid.Js, Joint.Js for the cliental based in US. Having an exposure of PHP,
Laravel, MySQL, AJAX, jQuery.`,
            description: etelligensExperience,
            responsibilty: [],
            time: "Nov. 2018– Present",
            awards: etelligensAwards.length ? etelligensAwards : [],
          }}
        />
        <Item
          item={{
            title: "RABBLER, NOIDA",
            position: "ASSOCIATE SOFTWARE DEVELOPER",
            description: rabblerExperience,
            responsibilty: rabblerResponsibilty,
            time: "Jan 2016 – March 2017",
            awards: [],
          }}
        />
        <h5 className="pb-2">Education</h5>
        <Item
          item={{
            title: "CDAC-HYDERABAD",
            position: "PG-DIPLOMA",
            abstract: `Post Graduate Diploma in System Software Development (PG DSSD) giving emphasis to secure software design
& implementation practices as per the industry needs. Passed with 70.25%`,
            description: [],
            responsibilty: [],
            time: "Feb 2018",
            awards: [],
          }}
        />
        <Item
          item={{
            title: "VISHVESHWARYA INST. OF TECHNOLOGY",
            position: "BACHELOR OF TECHNOLOGY",
            abstract:
              "Bachelor of Technology in Computer Science & Engineering with 58.12%.",
            description: [],
            responsibilty: [],
            time: "June 2016",
            awards: [],
          }}
        />
        <Item
          item={{
            title: "NIOS",
            position: "XII",
            abstract: "XII in PCM Stream with 66.66%.",
            description: [],
            responsibilty: [],
            time: "June 2010",
            awards: [],
          }}
        />
        <Item
          item={{
            title: "CITY MONTESSORI SCHOOL",
            position: "X",
            abstract: "X with 70.56%.",
            description: [],
            responsibilty: [],
            time: "June 2007",
            awards: [],
          }}
        />
      </div>
    );
  }
}

export default About;
