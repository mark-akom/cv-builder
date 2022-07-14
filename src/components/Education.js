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
                <div className="school-years-sec">
                    <label htmlFor="schoolYears">Years in School:</label>
                    <input name="user-school-years" id="schoolYears" type="text" value={education.schoolYears} onChange={(e) => handleEducationChange(e, education.id)} />
                </div>
            </form>
        </div>
    )
}

export default Education;