import PersonalOutput from "./sections/PersonalOutput";
import EducationOutputSection from "./areasForSections/EducationOutputSection";


function CVArea({fullName, birthDate, mail, mobilNum, formEducation, educationObjectList }) {
  return (
    <>
      <PersonalOutput fullName= {fullName} birthDate = {birthDate} mail = {mail} mobilNum = {mobilNum} />
      <EducationOutputSection formEducation = {formEducation} educationObjectList= {educationObjectList}/>
      
    </>
  );
}

export default CVArea;
