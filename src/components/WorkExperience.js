import React from "react";
import '../styles/work-styles.css'

const WorkExperience = ({workExperience, handleWorkExperienceChange}) => {

    return (
        <div className="work-experience-section">
            <form>
                <div className="company-name-sec">
                    <label htmlFor="companyName">Company Name:</label>
                    <input type="text" id="companyName" onChange={(e) => handleWorkExperienceChange(e, workExperience.id)} value={workExperience.companyName} name="user-company-name" />
                </div>
                <div className="position-sec">
                    <label htmlFor="position">Position:</label>
                    <input type="text" id="position" onChange={(e) => handleWorkExperienceChange(e, workExperience.id)} value={workExperience.position} name="user-position" />
                </div>
                <div className="start-date-sec">
                    <label htmlFor="startDate">Start Date:</label>
                    <input type="text" id="startDate" onChange={(e) => handleWorkExperienceChange(e, workExperience.id)} value={workExperience.startDate} name="user-start-date" />
                </div>
                <div className="end-date-sec">
                    <label htmlFor="endDate">End Date:</label>
                    <input type="text" id="endDate" onChange={(e) => handleWorkExperienceChange(e, workExperience.id)} value={workExperience.endDate} name="user-end-date" />
                </div>
                <div>
                    <label htmlFor="jobRole">Job Role</label>
                    <textarea id="jobRole" onChange={(e) => handleWorkExperienceChange(e, workExperience.id)} value={workExperience.jobRole} name="user-job-role"></textarea>
                </div>
            </form>
        </div>
    )
}

export default WorkExperience