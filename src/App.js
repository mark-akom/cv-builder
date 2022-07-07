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
      },
      educationInfo: {
        schoolName: "",
        courseStudy: "",
        schoolYears: ""
      },
      educationList: []
    }
    this.handleProfileChange = this.handleProfileChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleAddEducation = this.handleAddEducation.bind(this);
  }

  handleAddEducation() {
    this.setState({
      educationList: [...this.state.educationList, this.state.educationInfo]
    })
  }

  handleProfileChange(e) {
    this.setState({
      profileInfo: { ...this.state.profileInfo, [e.target.id]: e.target.value }
    })
  }

  handleEducationChange(e) {
    this.setState({
      educationInfo: { ...this.state.educationInfo, [e.target.id]: e.target.value }
    })
  }

  render() {
    const { profileInfo, educationInfo, educationList } = this.state;
    return (
      <div>
        <h1>Online CV Builder</h1>
        <section className="personal-details">
          <PersonalInfo profile={profileInfo} handleProfileChange={this.handleProfileChange} />
        </section>
        <section className="education-section">
          <button className="add-btn" onClick={this.handleAddEducation}>Add Education</button>
        </section>
        <Education education={educationInfo} handleEducationChange={this.handleEducationChange} />
      </div>
    )
  }
}

export default App;
