import TextInput from "../inputFields/TextInput";
import NumInput from "../inputFields/NumInput";
import MailInput from "../inputFields/MailInput";
import DateInput from "../inputFields/DateInput";
import SaveButton from "../buttons/SaveButton";

function PracticalInput() {
  return (
    <>
      <section>
        <form className="formPersonal">
          <fieldset>
            <TextInput labelText="Job Title:" />
            <TextInput labelText="Company:" />
            <DateInput labelDate="From:" />
            <DateInput labelDate="Until:" />
            <TextInput labelText="Activities:" />
            <SaveButton />
          </fieldset>
        </form>
      </section>
    </>
  );
}

export default PracticalInput;
