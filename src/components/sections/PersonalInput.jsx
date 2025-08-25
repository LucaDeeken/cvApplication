import TextInput from "../inputFields/TextInput";
import NumInput from "../inputFields/NumInput";
import MailInput from "../inputFields/MailInput";
import DateInput from "../inputFields/DateInput";

function PersonalInput({
  setName,
  setDate,
  setMobil,
  setMail,
  fullName,
  mobilNumber,
  mailAdress,
  birthDate,
}) {
  return (
    <>
      <section>
        <form className="formPersonal">
          <fieldset className="fieldsetPersonal">
            <TextInput
              labelText="Full Name:"
              placeHolder="John..."
              setName={setName}
              value={fullName}
              onChange={(e) => setName(e.target.value)}
            />
            <DateInput
              labelDate="Birthdate:"
              placeHolder="11.01.1990"
              setDate={setDate}
              value={birthDate}
              onChange={(e) => setDate(e.target.value)}
            />
            <MailInput
              labelMail="E-Mail:"
              placeHolder="John@web.com"
              setMail={setMail}
              value={mailAdress}
              onChange={(e) => setMail(e.target.value)}
            />
            <NumInput
              labelNum="Mobilnumber:"
              placeHolder="1234 56789"
              setNum={setMobil}
              value={mobilNumber}
              onChange={(e) => setMobil(e.target.value)}
            />
          </fieldset>
        </form>
      </section>
    </>
  );
}

export default PersonalInput;
