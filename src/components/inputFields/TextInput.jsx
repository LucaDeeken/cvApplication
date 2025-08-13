function TextInput({ labelText, placeHolder, setName, fullName }) {
  return (
    <>
      <div className="inputContainer">
        <label htmlFor="nameInput">{labelText} </label>
        <input type="text" id="nameInput" placeholder={placeHolder} value= {fullName} onChange={(e) => setName(e.target.value)} />
      </div>
    </>
  );
}

export default TextInput;
