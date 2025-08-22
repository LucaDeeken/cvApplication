function EducationOutput( {formEducation}) {

    console.log("Rendering EducationOutput for id:", formEducation.id);

    return (
      <div className="educationOutput">
        <div className="degreeSchool">
        <p className="educationOutput">{formEducation.degree}</p>
        <p>&nbsp;—&nbsp;</p>
        <p educationOutput>{formEducation.school}</p>
        </div>
        <div className="location">
        <p educationOutput>{formEducation.city}</p>
        <p>,</p>
        <p educationOutput>{formEducation.country}</p>
        </div>
        <div className="fromUntil">
        <p educationOutput>{formEducation.from}</p>
        <p>&nbsp;—&nbsp;</p>
        <p educationOutput>{formEducation.until}</p>
        </div>
        </div>
    );
  }
  
  export default EducationOutput;