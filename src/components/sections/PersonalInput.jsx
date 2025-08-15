import TextInput from "../inputFields/TextInput";
import NumInput from "../inputFields/NumInput";
import MailInput from "../inputFields/MailInput";
import DateInput from "../inputFields/DateInput";

function PersonalInput({setName, setDate, setMobile, setMail, fullName, mobilNumber, mailAdress, birthDate}) {
  return (
    <>
      <section>
        <form className="formPersonal">
          <fieldset className="fieldsetPersonal">
            <TextInput labelText="Full Name:" placeHolder="John..." setName={setName} value={fullName}/>
            <DateInput labelDate="Birthdate:" placeHolder="11.01.1990" setDate = {setDate} value= {birthDate} />
            <MailInput labelMail="E-Mail:" placeHolder="John@web.com" setMail= {setMail} value= {mailAdress} />
            <NumInput labelNum="Mobilnumber:" placeHolder="1234 56789" setNum = {setMobile} value= {mobilNumber}  />
          </fieldset>
        </form>
      </section>
    </>
  );
}

export default PersonalInput;
