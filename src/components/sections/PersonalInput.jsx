
function PersonalInput() {

    return (
        <>
        <section>
            <form className="formPersonal">
                <fieldset className="fieldsetPersonal">
                    <label htmlFor="nameInput">First Name: </label>
                    <input type="text" id="nameInput" placeholder="John..." />
                    <label htmlFor="nameInput">Last Name: </label>
                    <input type="text" id="nameInput" placeholder="John..." />
                </fieldset>
            </form>
        </section>
        </>
    )
}

export default PersonalInput;