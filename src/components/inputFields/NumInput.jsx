function NumInput({ labelNum, placeHolder, value, setNum, onChange }) {
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
