function PracticalOutput( {formPractical}) {

    console.log("Rendering EducationOutput for id:", formPractical.id);

    return (
      <div className="practicalOutput">
        <div className="jobTitle">
        <p>{formPractical.jobTitle}</p>
        <p>-</p>
        <p>{formPractical.company}</p>
        </div>
        <div className="activities">
        <p>{formPractical.activities}</p>
        </div>
        <div className="fromUntil">
        <p>{formPractical.from} — {formPractical.until}</p>
        </div>
        </div>
    );
  }
  
  export default PracticalOutput;