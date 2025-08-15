function NumInput({ labelNum, placeHolder, value, setNum }) {
  return (
    <>
      <div className="inputContainer">
        <label htmlFor="numInput">{labelNum} </label>
        <input type="number" id="numberInput" placeholder={placeHolder} value= {value} onChange= {(e) => setNum(e.target.value) }/>
      </div>
    </>
  );
}

export default NumInput;
