import TextInput from "../inputFields/TextInput";
import DateInput from "../inputFields/DateInput";
import TextField from "../inputFields/TextField";
import SaveButton from "../buttons/SaveButton";
import { useRef } from "react";

function PracticalInput( {setPracticalObjectList} ) {

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


  return (
    <>
      <section>
        <form className="formPractical" onSubmit={handleSubmit} ref={formRef}>
          <fieldset>
            <TextInput name="jobTitle" labelText="Job Title:" />
            <TextInput name="company" labelText="Company:" />
            <DateInput name="from" labelDate="From:" />
            <DateInput name="until" labelDate="Until:" />
            <TextField name="activities" labelText="Activities:" />
            <SaveButton />
          </fieldset>
        </form>
      </section>
    </>
  );
}

export default PracticalInput;
