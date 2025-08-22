import PersonalInput from "./sections/PersonalInput";
import EducationInput from "./sections/EducationInput";
import PracticalInput from "./sections/PracticalInput";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

function Sidebar( {practicalInputValue, updatePracticalState, updatePracticalList, practicalEditBtnDisabled, educationalEditBtnDisabled, updateEducationList, setName, fullName, setDate, setMobil, setMail, birthDate, mailAdress, mobilNumber, setEducationForm, setPracticalForm, toggleSection, openAreaPersonal, openAreaEducational, openAreaPractical, educationInputValue, setEducationInputValue, updateEducationState, educationEditBtn, practicalEditBtn   }) {
  
  return (
    <>
      <ul className="curriculumList">
        <li id={openAreaPersonal === "open" ? "open" : ""} className="personalLi">
          Personal Details
          <Icon
            path={mdiChevronDown}
            size={1.8}
            className="arrowDown"
            onClick={() => toggleSection("personal")}
          />
          <div
            className={
              openAreaPersonal === "open" ? "personFormElement" : "hidden"
            }
          >
            <PersonalInput setName= {setName} setDate= {setDate} setMobil= {setMobil} setMail = {setMail} fullName= {fullName} birthDate= {birthDate} mailAdress= {mailAdress} mobilNumber= {mobilNumber} />
          </div>
        </li>
        <li
          id={openAreaEducational === "open" ? "open" : ""}
          className="educationalLi"
        >
          Educational Details
          <Icon
            path={mdiChevronDown}
            size={1.8}
            className="arrowDown"
            onClick={() => toggleSection("educational")}
          />
          <div
            className={
              openAreaEducational === "open" ? "personFormElement" : "hidden"
            }
          >
            <EducationInput educationalEditBtnDisabled= {educationalEditBtnDisabled} updateEducationList= {updateEducationList} setEducationForm = {setEducationForm} educationInputValue= {educationInputValue} setEducationInputValue= {setEducationInputValue} updateEducationState= {updateEducationState} educationEditBtn= {educationEditBtn} />
          </div>
        </li>
        <li id={openAreaPractical === "open" ? "open" : ""} class="practicalLi">
          Practical Details
          <Icon
            path={mdiChevronDown}
            size={1.8}
            className="arrowDown"
            onClick={() => toggleSection("practical")}
          />
          <div
            className={
              openAreaPractical === "open" ? "personFormElement" : "hidden"
            }
          >
            <PracticalInput practicalInputValue= {practicalInputValue} updatePracticalState= {updatePracticalState} updatePracticalList= {updatePracticalList} practicalEditBtnDisabled= {practicalEditBtnDisabled} setPracticalObjectList = {setPracticalForm} practicalEditBtn= {practicalEditBtn} />
          </div>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
