import React, { useState } from "react";

function DeleteButton(props) {
  // const [removeItems, setRemoveItems] = useState(null)

  const {submittedForm, setSubmittedForm, index } = props;
  const handleRemove = () => {
    console.log("index",index)
    const list = [...submittedForm];
    console.log("removed", list);
    list.splice(index, 1);
    setSubmittedForm(list);
  };
  return (
    <div>
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
}

export default DeleteButton;
