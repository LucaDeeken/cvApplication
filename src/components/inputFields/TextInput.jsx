function TextInput() {

    return (
      <>
        <div className="inputContainer">
          <label htmlFor="nameInput">Full Name: </label>
          <input type="text" id="nameInput" placeholder="John..." />
        </div>
      </>
    )
  }

export default TextInput;