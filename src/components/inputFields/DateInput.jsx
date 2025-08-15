function DateInput({ labelDate, value, setDate, name }) {
  return (
    <>
      <div className="inputContainer">
        <label htmlFor="dateInput">{labelDate}</label>
        <input type="date" id="dateInput" name = {name} value= {value} onChange= {(e) => {
          if (typeof setDate === "function") {
            setDate(e.target.value)
          }
        } } />
      </div>
    </>
  );
}

export default DateInput;
