import React from "react";
import '../styles/education-styles.css'

const Education = (props) => {
    const { education, handleEducationChange } = props
    return(
        <div className="education-section">
            <form>
                <div className="school-name-sec">
                    <label htmlFor="schoolName">Name of School:</label>
                    <input name="user-school" id="schoolName" value={education.schoolName} onChange={(e) => handleEducationChange(e, education.id)} type="text" />
                </div>
                <div className="course-study-sec">
                    <label htmlFor="courseStudy">Course Studied:</label>
                    <input name="user-course" id="courseStudy" type="text" value={education.courseStudy} onChange={(e) => handleEducationChange(e, education.id)} />
                </div>
                <div className="start-year">
                    <label htmlFor="startYear">Start Year:</label>
                    <input name="user-start-year" id="startYear" type="text" value={education.startYear} onChange={(e) => handleEducationChange(e, education.id)} />
                </div>
                <div className="end-year">
                    <label htmlFor="endYear">End Year:</label>
                    <input name="user-end-year" id="endYear" type="text" value={education.endYear} onChange={(e) => handleEducationChange(e, education.id)} />
                </div>
                <div className="btn-group">
                    <button>Delete Form</button>
                </div>
            </form>
        </div>
    )
}

export default Education;