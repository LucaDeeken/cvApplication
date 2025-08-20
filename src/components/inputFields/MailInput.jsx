function MailInput({ labelMail, placeHolder, value, setMail, onChange }) {
  return (
    <>
      <div className="inputContainer">
        <label htmlFor="mailInput">{labelMail} </label>
        <input type="email" id="mailInput" placeholder={placeHolder} value= {value} onChange= {onChange } />
      </div>
    </>
  );
}

export default MailInput;
