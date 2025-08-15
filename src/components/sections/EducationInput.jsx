import DateInput from "../inputFields/DateInput";
import TextInput from "../inputFields/TextInput";
import SaveButton from "../buttons/SaveButton";
import { useRef } from "react";

function EducationInput({setEducationForm }) {
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

  return (
    <>
      <section>
        <form className="formEducation" onSubmit={handleSubmit} ref={formRef}>
          <fieldset>
            <TextInput name="degree" labelText="Degree:" />
            <TextInput name="school" labelText="School:" />
            <TextInput name="city" labelText="City:" />
            <TextInput name="country" labelText="Country:" />
            <DateInput name="from" labelDate="From:" />
            <DateInput name="until"labelDate="Until:" />
            <SaveButton />
          </fieldset>
        </form>
      </section>
    </>
  );
}

export default EducationInput;
