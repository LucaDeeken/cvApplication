import PersonalInput from "./sections/PersonalInput";
import EducationInput from "./sections/EducationInput";
import ExperienceInput from "./sections/PracticalInput";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import { useState } from "react";

function Sidebar( {setName, fullName, setDate, setMobil, setMail, birthDate, mailAdress, mobilNumber, setEducationForm, setPracticalForm, toggleSection, openAreaPersonal, setOpenAreaPersonal, openAreaEducational, setOpenAreaEducational, openAreaPractical, setOpenAreaPractical, educationInputValue, setEducationInputValue   }) {
  
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
            <EducationInput setEducationForm = {setEducationForm} educationInputValue= {educationInputValue} setEducationInputValue= {setEducationInputValue} />
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
            <ExperienceInput setPracticalObjectList = {setPracticalForm} />
          </div>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
