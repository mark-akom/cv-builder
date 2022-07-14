import React, { Component } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
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
      workExperience: {
        companyName: "",
        position: "",
        startDate: "",
        endDate: "",
        jobRole: "",
        id: uniqid()
      },
      educationList: [],
      workExperienceList: []
    }
    this.handleProfileChange = this.handleProfileChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.handleAddWorkExperience = this.handleAddWorkExperience.bind(this);
    this.handleWorkExperienceChange = this.handleWorkExperienceChange.bind(this);
  }

  handleAddEducation() {
    this.setState({
      educationList: [...this.state.educationList, this.state.educationInfo]
    });
    this.setState({
      educationInfo: {...this.state.educationInfo, id: uniqid()}
    })
  }

  handleAddWorkExperience() {
    this.setState({
      workExperienceList: [...this.state.workExperienceList, this.state.workExperience]
    });
    this.setState({
      workExperience: {...this.state.workExperience, id: uniqid()}
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

  handleWorkExperienceChange(e, id) {
    let targetToChange = this.state.workExperienceList.find(workExperience => workExperience.id === id);
    targetToChange = {...targetToChange, [e.target.id]: e.target.value};
    const unchangedWorkExperienceList = this.state.workExperienceList.filter(workExperience => workExperience.id !== id);

    this.setState({
      workExperienceList: [...unchangedWorkExperienceList, targetToChange]
    })
  }

  render() {
    const { profileInfo, educationList, workExperienceList } = this.state;
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
        <section className="work-section">
          {
            workExperienceList.map(work => {
              return (<WorkExperience key={work.id} handleWorkExperienceChange={this.handleWorkExperienceChange} workExperience={work} />) 
            })
          }
          <button className="add-btn" onClick={this.handleAddWorkExperience}>Add Work Experience</button>
        </section>
      </div>
    )
  }
}

export default App;
