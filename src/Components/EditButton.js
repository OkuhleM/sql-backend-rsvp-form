import React, { useState } from "react";
import axios from "axios";
function EditButton(props) {
  const [edit, setEdit] = useState([]);

  const { formInfo, setFormInfo, submittedForm, setSubmittedForm } = props;
  const handleEdit = (id) => {
const newList = [...formInfo].map((value)=>{

})
  };
  console.log("edit", edit);

  console.log("edit", formInfo);

  return (
    <div>
      <button onClick={handleEdit}>Edit</button>
      <button>Save</button>
    </div>
  );
}

export default EditButton;
