import PersonalOutput from "./sections/PersonalOutput";
import EducationOutputSection from "./areasForSections/EducationOutputSection";
import PracticalOutputSection from "./areasForSections/PracticalOutputSectionArea";


function CVArea({fullName, birthDate, mail, mobilNum, educationObjectList, practicalObjectList, setEducationObjectList, setPracticalObjectList, setFullName, setBirthDate, setMail, setMobil }) {
  return (
    <>
      <PersonalOutput fullName= {fullName} birthDate = {birthDate} mail = {mail} mobilNum = {mobilNum} setEducationObjectList = {setEducationObjectList} setPracticalObjectList = {setPracticalObjectList} setFullName = {setFullName} setBirthDate = {setBirthDate} setMail = {setMail} setMobil= {setMobil} />
      <EducationOutputSection educationObjectList= {educationObjectList}/>
      <PracticalOutputSection practicalObjectList= {practicalObjectList}/>
    </>
  );
}

export default CVArea;
