import React, { Component } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileInfo: {
        fullName: "",
        email: "",
        phoneNumber: "",
        profession: "",
        profileDesc: ""
      }
    }
    this.handleProfileChange = this.handleProfileChange.bind(this);
  }

  handleProfileChange(e) {
    this.setState({
      profileInfo: { ...this.state.profileInfo, [e.target.id]: e.target.value }
    })
  }

  render() {
    const { profileInfo } = this.state;
    return (
      <div>
        <h1>Online CV Builder</h1>
        <PersonalInfo profile={profileInfo} handleChange={this.handleProfileChange} />
        <Education />
      </div>
    )
  }
}

export default App;
