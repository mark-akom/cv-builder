import React, { Component } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import uniqid from 'uniqid'

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
        schoolYears: "",
        id: uniqid()
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
    });
    this.setState({
      educationInfo: {...this.state.educationInfo, id: uniqid()}
    })
  }

  handleProfileChange(e) {
    this.setState({
      profileInfo: { ...this.state.profileInfo, [e.target.id]: e.target.value }
    })
  }

  handleEducationChange(e, id) {
    let targetToChange = this.state.educationList.find(eduItem => eduItem.id === id );
    targetToChange = {...targetToChange, [e.target.id]: e.target.value};
    const unchangedEducationList = this.state.educationList.filter(eduItem => eduItem.id !== id);

    this.setState({
      educationList: [...unchangedEducationList, targetToChange]
    })
  }

  render() {
    const { profileInfo, educationList } = this.state;
    return (
      <div>
        <h1>Online CV Builder</h1>
        <section className="personal-details">
          <PersonalInfo profile={profileInfo} handleProfileChange={this.handleProfileChange} />
        </section>
        <section className="education-section">
          {
            educationList.map(eduItem => {
              return (<Education key={eduItem.id} education={eduItem} handleEducationChange={this.handleEducationChange} />)
            })
          }
          <button className="add-btn" onClick={this.handleAddEducation}>Add Education</button>
        </section>
      </div>
    )
  }
}

export default App;
