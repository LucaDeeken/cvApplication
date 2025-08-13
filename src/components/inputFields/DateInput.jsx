function DateInput({ labelDate }) {
  return (
    <>
      <div className="inputContainer">
        <label htmlFor="dateInput">{labelDate}</label>
        <input type="date" id="dateInput" />
      </div>
    </>
  );
}

export default DateInput;
