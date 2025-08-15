function MailInput({ labelMail, placeHolder, value, setMail }) {
  return (
    <>
      <div className="inputContainer">
        <label htmlFor="mailInput">{labelMail} </label>
        <input type="email" id="mailInput" placeholder={placeHolder} value= {value} onChange= {(e) => setMail(e.target.value) } />
      </div>
    </>
  );
}

export default MailInput;
