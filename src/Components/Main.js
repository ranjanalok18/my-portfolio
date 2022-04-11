import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import About from "./About/About";
// import Skills from "./Skills/Skills";
// import Projects from "./Projects/Projects";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { name: "About", component: <About /> },
        // { name: "Skills", component: <Skills /> },
        // { name: "Projects", component: <Projects /> },
      ],
    };
  }

  render() {
    const tabs = this.state.tabs.map((tab) => <Tab>{tab.name}</Tab>);

    const tabContent = this.state.tabs.map((tab) => (
      <TabPanel>{tab.component}</TabPanel>
    ));

    return (
      <div className="main">
        <Tabs>
          <TabList>{tabs}</TabList>
          {tabContent}
        </Tabs>
      </div>
    );
  }
}

export default Main;
