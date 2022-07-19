import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import '../styles/preview-styles.css'


const Preview = ({ profileInfo, workExperienceList, educationList }) => {
    const { fullName, email, phoneNumber, profession, profileDesc } = profileInfo
    const workList = workExperienceList.map(work => {
        const {companyName, position, startDate, endDate, jobRole, id} = work;
        return (
            <div className="work-item" key={id}>
                <div className="duration">
                    <p>{startDate} - {endDate}</p>
                </div>
                <div className="other-work-details">
                    <h3 className="company-name">{companyName}</h3>
                    <p className="job-title">{position}</p>
                    <p className="job-role">{jobRole}</p>
                </div>
            </div>
        )
    })
    const education = educationList.map(education => {
        const { schoolName, courseStudy, startYear, endYear, id } = education
        return (
            <div className="education-item" key={id} >
                <div className="duration">
                    <p>{startYear} - {endYear}</p>
                </div>
                <div className="other-school-details">
                    <h3 className="school-name">{schoolName}</h3>
                    <p>{courseStudy}</p>
                </div>
            </div>
        )
    })
    return (
        <div className="preview-container">
            <div className="preview">
            <section className="personal-info">
                <div className="name-prof">
                    <h1 className="name">{fullName}</h1>
                    <p className="prof">{profession}</p>
                </div>
                <div className="contact-info">
                    <p className="email">
                        <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                        <span>{email}</span>
                    </p>
                    <p className="phone-number">
                        <span className="icon"><FontAwesomeIcon icon={faPhone} /></span>
                        <span>{phoneNumber}</span>
                    </p>
                </div>
                <div className="personal-summary">
                    <h2 className="preview-section-heading">Personal Summary</h2>
                    <hr />
                    <p className="summary-text">{profileDesc}</p>
                </div>
            </section>
            <section className="employment-history">
                <h2 className="preview-section-heading">Employment History</h2>
                <hr />
                <div className="work-list">
                    {workList}
                </div>
            </section>
            <scetion className="education-history">
                <h2 className="preview-section-heading">Education History</h2>
                <hr />
                <div className="education-list">
                    {education}
                </div>
            </scetion>
            </div>
        </div>
    )
}

export default Preview