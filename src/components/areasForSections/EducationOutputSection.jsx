
import EducationOutput from "../sections/EducationOutput";

function EducationOutputSection( {educationObjectList, queryID} ) {

    
    return(
        <>
        <div className="educationalOutputSection">
        <h1>EDUCATION</h1>
        <ul>
            {educationObjectList.map((object) => (
              <li key={object.id} data-id={object.id} className="educationListEle" onClick={() => queryID(object.id)}>
                <EducationOutput formEducation = {object} />
              </li>  
            ))}
        </ul>
        </div>
        </>


    )
}

export default EducationOutputSection;