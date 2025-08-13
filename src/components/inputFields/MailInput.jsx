function MailInput({ labelMail, placeHolder }) {
  return (
    <>
      <div className="inputContainer">
        <label htmlFor="mailInput">{labelMail} </label>
        <input type="email" id="mailInput" placeholder={placeHolder} />
      </div>
    </>
  );
}

export default MailInput;
