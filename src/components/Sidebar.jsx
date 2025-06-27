import PersonalInput from "./sections/PersonalInput";
import EducationInput from "./sections/PersonalInput";
import ExperienceInput from "./sections/PersonalInput";
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';


function Sidebar() {

    return (
        <>
        <ul class="curriculumList">
            <li>
            Personal Details
            <Icon path={mdiChevronDown} size={1.8} className="arrowDown" />
            <div class="  personFormElement">
            <PersonalInput />
            </div>
            </li>
            <li>
            Educational Details
            <Icon path={mdiChevronDown} size={1.8} className="arrowDown" />
            <div class="hidden">
            <EducationInput />
            </div>
            </li>
            <li>
            Practical Details
            <Icon path={mdiChevronDown} size={1.8} className="arrowDown" />
            <div class="hidden">
            <ExperienceInput />
            </div>
            </li>
        </ul>
        </>
    )
}

export default Sidebar;