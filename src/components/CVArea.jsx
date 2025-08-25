import PersonalOutput from "./sections/PersonalOutput";
import EducationOutputSection from "./areasForSections/EducationOutputSection";
import PracticalOutputSection from "./areasForSections/PracticalOutputSectionArea";
import "../styles/CVArea.css";

function CVArea({
  fullName,
  birthDate,
  mail,
  mobilNum,
  educationObjectList,
  practicalObjectList,
  setEducationObjectList,
  setPracticalObjectList,
  setFullName,
  setBirthDate,
  setMail,
  setMobil,
  queryID,
  queryIDPractical,
  updateEducationState,
  setEducationEditBtn,
  toggleEdit,
}) {
  return (
    <>
      <PersonalOutput
        fullName={fullName}
        birthDate={birthDate}
        mail={mail}
        mobilNum={mobilNum}
        setEducationObjectList={setEducationObjectList}
        setPracticalObjectList={setPracticalObjectList}
        setFullName={setFullName}
        setBirthDate={setBirthDate}
        setMail={setMail}
        setMobil={setMobil}
      />
      <EducationOutputSection
        educationObjectList={educationObjectList}
        queryID={queryID}
        updateEducationState={updateEducationState}
        setEducationEditBtn={setEducationEditBtn}
        toggleEdit={toggleEdit}
      />
      <PracticalOutputSection
        practicalObjectList={practicalObjectList}
        queryIDPractical={queryIDPractical}
      />
    </>
  );
}

export default CVArea;
