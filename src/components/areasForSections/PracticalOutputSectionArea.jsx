
import PracticalOutput from "../sections/PracticalOutput";

function PracticalOutputSection( {practicalObjectList} ) {

    
    return(
        <>
        <div className="practicalOutputSection">
        <h1>PRACTICAL</h1>
        <ul>
            {practicalObjectList.map((object) => (
              <li key={object.id} className="practicalListEle">
                <PracticalOutput formPractical = {object} setPracticalObjectList= {practicalObjectList} />
              </li>  
            ))}
        </ul>
        </div>
        </>


    )
}

export default PracticalOutputSection;