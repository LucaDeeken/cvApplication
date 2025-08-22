function DateInput({ labelDate, value, name, onChange }) {
  return (
    <>
      <div className="inputContainer">
        <label htmlFor="dateInput">{labelDate}</label>
        <input type="date" id="dateInput" name = {name} value= {value} onChange= {onChange}/>
      </div>
    </>
  );
}

export default DateInput;
