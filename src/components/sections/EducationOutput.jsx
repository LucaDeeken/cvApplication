function EducationOutput( {formEducation}) {

    console.log("Rendering EducationOutput for id:", formEducation.id);

    return (
      <div className="educationOutput">
        <div className="degreeSchool">
        <p>{formEducation.degree}</p>
        <p>-</p>
        <p>{formEducation.school}</p>
        </div>
        <div className="location">
        <p>{formEducation.city}, {formEducation.country}</p>
        </div>
        <div className="fromUntil">
        <p>{formEducation.from}—{formEducation.until}</p>
        </div>
        </div>
    );
  }
  
  export default EducationOutput;