
import EducationOutput from "../sections/EducationOutput";

function EducationOutputSection( {educationObjectList} ) {

    
    return(
        <>
        <div className="educationalOutputSection">
        <h1>EDUCATION</h1>
        <ul>
            {educationObjectList.map((object) => (
              <li key={object.id} className="educationListEle">
                <EducationOutput formEducation = {object} />
              </li>  
            ))}
        </ul>
        </div>
        </>


    )
}

export default EducationOutputSection;