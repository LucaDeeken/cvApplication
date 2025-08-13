import PersonalInput from "./sections/PersonalInput";
import EducationInput from "./sections/EducationInput";
import ExperienceInput from "./sections/PracticalInput";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import { useState } from "react";

function Sidebar( {setName, fullName}) {
  const [openAreaPersonal, setOpenAreaPersonal] = useState("");
  const [openAreaEducational, setOpenAreaEducational] = useState("");
  const [openAreaPractical, setOpenAreaPractical] = useState("");
  const toggleSection = (section) => {
    if (section === "personal") {
      setOpenAreaPersonal(openAreaPersonal === "open" ? "" : "open");
    } else if (section === "educational") {
      setOpenAreaEducational(openAreaEducational === "open" ? "" : "open");
    } else {
      setOpenAreaPractical(openAreaPractical === "open" ? "" : "open");
    }
  };
  return (
    <>
      <ul className="curriculumList">
        <li id={openAreaPersonal === "open" ? "open" : ""} class="personalLi">
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
            <PersonalInput setName= {setName} fullName= {fullName} />
          </div>
        </li>
        <li
          id={openAreaEducational === "open" ? "open" : ""}
          class="educationalLi"
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
            <EducationInput />
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
            <ExperienceInput />
          </div>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
