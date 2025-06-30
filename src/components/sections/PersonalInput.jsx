import TextInput from "../inputFields/TextInput";
import NumInput from "../inputFields/NumInput";
import MailInput from "../inputFields/MailInput";
import DateInput from "../inputFields/DateInput";


function PersonalInput() {

    return (
        <>
        <section>
            <form className="formPersonal">
                <fieldset className="fieldsetPersonal">
                    <TextInput

                    />
                    <MailInput

                    />
                    <NumInput

                    />
                </fieldset>
            </form>
        </section>
        </>
    )
}

export default PersonalInput;