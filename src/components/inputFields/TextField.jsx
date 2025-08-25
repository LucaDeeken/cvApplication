function TextFieldInput({ labelText, placeHolder, value, name, onChange }) {
  return (
    <>
      <div className="inputContainer">
        <label htmlFor="nameInput">{labelText} </label>
        <textarea
          type="text"
          id="nameInput"
          name={name}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default TextFieldInput;
