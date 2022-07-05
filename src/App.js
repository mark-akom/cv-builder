import React, { Component } from "react";
import PersonalInfo from "./components/PersonalInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }
  render() {
    return (
      <div>
        <h1>Online CV Builder</h1>
        <PersonalInfo />
      </div>
    )
  }
}

export default App;
