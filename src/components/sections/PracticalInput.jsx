import TextInput from "../inputFields/TextInput";
import DateInput from "../inputFields/DateInput";
import TextField from "../inputFields/TextField";
import SaveButton from "../buttons/SaveButton";
import { useRef } from "react";
import EditButton from "../buttons/EditButton";

function PracticalInput({
  setPracticalObjectList,
  practicalEditBtn,
  practicalEditBtnDisabled,
  updatePracticalList,
  updatePracticalState,
  practicalInputValue,
}) {
  const formRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.elements.jobTitle.value);
    const data = new FormData(formRef.current);
    console.log(data);
    const formObject = Object.fromEntries(data.entries());
    console.log(formObject);
    setPracticalObjectList(formObject);
  }

  function handleEditClick() {
    updatePracticalList();
  }

  return (
    <>
      <section>
        <form className="formPractical" onSubmit={handleSubmit} ref={formRef}>
          <fieldset>
            <TextInput
              name="jobTitle"
              labelText="Job Title:"
              onChange={(e) => updatePracticalState("jobTitle", e.target.value)}
              value={practicalInputValue.jobTitle}
            />
            <TextInput
              name="company"
              labelText="Company:"
              onChange={(e) => updatePracticalState("company", e.target.value)}
              value={practicalInputValue.company}
            />
            <DateInput
              name="from"
              labelDate="From:"
              onChange={(e) => updatePracticalState("from", e.target.value)}
              value={practicalInputValue.from}
            />
            <DateInput
              name="until"
              labelDate="Until:"
              onChange={(e) => updatePracticalState("until", e.target.value)}
              value={practicalInputValue.until}
            />
            <TextField
              name="activities"
              labelText="Activities:"
              onChange={(e) =>
                updatePracticalState("activities", e.target.value)
              }
              value={practicalInputValue.activities}
            />
          </fieldset>
          <div className="buttons">
            <EditButton
              EditBtn={practicalEditBtn}
              updateEducationList={updatePracticalList}
              onClick={handleEditClick}
              EditBtnDisabled={practicalEditBtnDisabled}
            />
            <SaveButton />
          </div>
        </form>
      </section>
    </>
  );
}

export default PracticalInput;
