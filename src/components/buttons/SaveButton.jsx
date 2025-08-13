import { useState } from "react";

function SaveButton() {
  return (
    <button className="saveBtn" onClick={() => saveData(section)}>
      Save
    </button>
  );
}

export default SaveButton;
