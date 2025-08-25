function EditButton({ EditBtn, onClick, EditBtnDisabled }) {
  console.log("EditButton educationEditBtn:", EditBtn);

  return (
    <button
      disabled={EditBtnDisabled}
      className={`editBtn ${EditBtn}`}
      type="button"
      onClick={onClick}
    >
      Edit!
    </button>
  );
}

export default EditButton;
