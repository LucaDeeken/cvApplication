import TextInput from "../inputFields/TextInput";
import NumInput from "../inputFields/NumInput";
import MailInput from "../inputFields/MailInput";
import DateInput from "../inputFields/DateInput";
import SaveButton from "../buttons/SaveButton";

function PersonalInput({setName, fullName}) {
  return (
    <>
      <section>
        <form className="formPersonal">
          <fieldset className="fieldsetPersonal">
            <TextInput labelText="Full Name:" placeHolder="John..." setName={setName} fullName={fullName}/>
            <DateInput labelDate="Birthdate:" placeHolder="11.01.1990" />
            <MailInput labelMail="E-Mail:" placeHolder="John@web.com" />
            <NumInput labelNum="Mobilnumber:" placeHolder="1234 56789" />
            <SaveButton />
          </fieldset>
        </form>
      </section>
    </>
  );
}

export default PersonalInput;
