import React from "react";

const WorkExperience = ({workExperience}) => {

    return (
        <div className="work-experience-section">
            <form>
                <div className="company-name-sec">
                    <label htmlFor="companyName">Company Name:</label>
                    <input type="text" id="companyName" value={workExperience.companyName} name="user-company-name" />
                </div>
                <div className="position-sec">
                    <label htmlFor="position">Position:</label>
                    <input type="text" id="position" value={workExperience.position} name="user-position" />
                </div>
                <div className="start-date-sec">
                    <label htmlFor="startDate">Start Date:</label>
                    <input type="text" id="startDate" value={workExperience.startDate} name="user-start-date" />
                </div>
                <div className="end-date-sec">
                    <label htmlFor="endDate">End Date:</label>
                    <input type="text" id="endDate" value={workExperience.endDate} name="user-end-date" />
                </div>
                <div>
                    <label htmlFor="jobRole">Job Role</label>
                    <textarea id="jobRole" value={workExperience.jobRole} name="user-job-role"></textarea>
                </div>
            </form>
        </div>
    )
}

export default WorkExperience