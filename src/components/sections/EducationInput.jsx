import DateInput from "../inputFields/DateInput";
import TextInput from "../inputFields/TextInput";
import SaveButton from "../buttons/SaveButton";
import { useRef } from "react";
import EditButton from "../buttons/EditButton";

function EducationInput({setEducationForm, educationInputValue, updateEducationList, updateEducationState, educationEditBtn, educationalEditBtnDisabled }) {
  const formRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.elements.school.value);
    const data = new FormData(formRef.current);
    console.log(data);
    const formObject = Object.fromEntries(data.entries());
    console.log(formObject);
    setEducationForm(formObject);
  }

  function handleEditClick() {
    updateEducationList();
  }

  return (
    <>
      <section>
        <form className="formEducation" onSubmit={handleSubmit} ref={formRef}>
          <fieldset>
            <TextInput name="degree" labelText="Degree:" onChange= {(e) => updateEducationState("degree", e.target.value)} value= {educationInputValue.degree} />
            <TextInput name="school" labelText="School:" onChange= {(e) => updateEducationState("school", e.target.value)} value= {educationInputValue.school}/>
            <TextInput name="city" labelText="City:" onChange= {(e) => updateEducationState("city", e.target.value)} value= {educationInputValue.city}/>
            <TextInput name="country" labelText="Country:" onChange= {(e) => updateEducationState("country", e.target.value)} value= {educationInputValue.country} />
            <DateInput name="from" labelDate="From:" onChange= {(e) => updateEducationState("from", e.target.value)} value= {educationInputValue.from} />
            <DateInput name="until"labelDate="Until:" onChange= {(e) => updateEducationState("until", e.target.value)} value= {educationInputValue.until} />
          </fieldset>
          <div className="buttons">
          <EditButton EditBtn= {educationEditBtn} updateEducationList= {updateEducationList} onClick= {handleEditClick} EditBtnDisabled= {educationalEditBtnDisabled} />
          <SaveButton />
          </div>
        </form>
      </section>
    </>
  );
}

export default EducationInput;
