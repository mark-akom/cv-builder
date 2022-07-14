import React from "react";
import '../styles/personal-info.css'

class PersonalInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { profile, handleProfileChange } = this.props;
        return (
            <div className="personal-details-container">
                <form>
                    <div className="name-sec">
                        <label htmlFor="fullName">Full Name:</label>
                        <input type="text" id="fullName" name="fullname" onChange={(e) => handleProfileChange(e)} value={profile.fullName} />
                    </div>
                    <div className="profession-sec">
                        <label htmlFor="profession">Profession:</label>
                        <input type="text" id="profession" name="user-profession" onChange={(e) => handleProfileChange(e)} value={profile.profession} />
                    </div>
                    <div className="email-sec">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="user-email" onChange={(e) => handleProfileChange(e)} value={profile.email} />
                    </div>
                    <div className="phone-sec">
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input type="text" id="phoneNumber" onChange={(e) => handleProfileChange(e)} name="user-phone-number" value={profile.phoneNumber} />
                    </div>
                    <div className="profile-desc-sec">
                        <label htmlFor="profileDesc">Profile Description:</label>
                        <textarea value={profile.profileDesc} id="profileDesc" onChange={(e) => handleProfileChange(e)} name="user-profile-desc"></textarea>
                    </div>
                </form>
            </div>
        )
    }
}


export default PersonalInfo