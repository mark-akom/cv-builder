import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import '../styles/preview-styles.css'


const Preview = ({ profileInfo }) => {
    const { fullName, email, phoneNumber, profession, profileDesc } = profileInfo
    return (
        <div className="preview-container">
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
            </section>
        </div>
    )
}

export default Preview