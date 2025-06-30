import PersonalInput from "./sections/PersonalInput";
import EducationInput from "./sections/PersonalInput";
import ExperienceInput from "./sections/PersonalInput";
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';


function Sidebar() {

    return (
        <>
        <ul className="curriculumList">
            <li id="open">
            Personal Details
            <Icon path={mdiChevronDown} size={1.8} className="arrowDown" />
            <div className="  personFormElement">
            <PersonalInput />
            </div>
            </li>
            <li >
            Educational Details
            <Icon path={mdiChevronDown} size={1.8} className="arrowDown" />
            <div className="hidden">
            <EducationInput />
            </div>
            </li>
            <li>
            Practical Details
            <Icon path={mdiChevronDown} size={1.8} className="arrowDown" />
            <div className="hidden">
            <ExperienceInput />
            </div>
            </li>
        </ul>
        </>
    )
}

export default Sidebar;