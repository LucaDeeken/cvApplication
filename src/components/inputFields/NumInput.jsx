function NumInput({ labelNum, placeHolder }) {
  return (
    <>
      <div className="inputContainer">
        <label htmlFor="numInput">{labelNum} </label>
        <input type="number" id="numberInput" placeholder={placeHolder} />
      </div>
    </>
  );
}

export default NumInput;
