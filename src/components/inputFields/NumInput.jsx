function NumInput({ labelNum, placeHolder, value, onChange }) {
  return (
    <>
      <div className="inputContainer">
        <label htmlFor="numInput">{labelNum} </label>
        <input type="number" id="numberInput" placeholder={placeHolder} value= {value} onChange= {onChange }/>
      </div>
    </>
  );
}

export default NumInput;
