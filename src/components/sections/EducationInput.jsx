import DateInput from "../inputFields/DateInput";
import TextInput from "../inputFields/TextInput";
import SaveButton from "../buttons/SaveButton";

function EducationInput() {
  return (
    <>
      <section>
        <form className="formEducation">
          <fieldset>
            <TextInput labelText="Degree:" />
            <TextInput labelText="School:" />
            <TextInput labelText="City:" />
            <TextInput labelText="Country:" />
            <DateInput labelDate="From:" />
            <DateInput labelDate="Until:" />
            <SaveButton />
          </fieldset>
        </form>
      </section>
    </>
  );
}

export default EducationInput;
