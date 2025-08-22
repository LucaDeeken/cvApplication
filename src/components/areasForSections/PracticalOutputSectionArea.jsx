
import PracticalOutput from "../sections/PracticalOutput";

function PracticalOutputSection( {practicalObjectList, queryIDPractical, practicalEditBtnDisabled} ) {

    
    return(
        <>
        <div className="practicalOutputSection">
        <h1>PRACTICAL</h1>
        <ul>
            {practicalObjectList.map((object) => (
              <li key={object.id} className="practicalListEle" onClick={()=> queryIDPractical(object.id)}>
                <PracticalOutput formPractical = {object} />
              </li>  
            ))}
        </ul>
        </div>
        </>


    )
}

export default PracticalOutputSection;