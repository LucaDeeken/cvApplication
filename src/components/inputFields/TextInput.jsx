function TextInput({ labelText, placeHolder, setName, value, name }) {
  return (
    <>
      <div className="inputContainer">
        <label htmlFor="nameInput">{labelText} </label>
        <input type="text" id="nameInput" name = {name} placeholder={placeHolder} value= {value} onChange={(e) => {
          if (typeof setName === "function") {
            setName(e.target.value)
          }
        } } />
      </div>
    </>
  );
}

export default TextInput;
