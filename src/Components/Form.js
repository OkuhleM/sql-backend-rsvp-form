import React, { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { Link } from "react-router-dom";

function Form() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    surname: "",
    food: [""],
    time: 1,
    attending: false,
  });

  const [submittedForm, setSubmittedForm] = useState([]);

  const handleChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedForm([...submittedForm, formInfo]);
  };

  return (
    <div>
      <header>
        <nav id="navbar">
          <a href="#navbar">Home</a>
          <Link to="/attenders">
            <a>Attenders</a>
          </Link>
          <a>Not Attending</a>
        </nav>
      </header>

      <div className="form">
        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formInfo.name}
          />
          <br />
          <label>surname</label>
          <input
            type="text"
            name="surname"
            onChange={handleChange}
            value={formInfo.surname}
          />
          <br />
          <h2>Food</h2>
          <label>Pasta</label>
          <input
            type="checkbox"
            name="food"
            onChange={handleChange}
            value="pasta"
          />
          {/* <br /> */}
          <label>Mac&Cheese</label>
          <input
            type="checkbox"
            name="food"
            onChange={handleChange}
            value="mac"
          />
          {/* <br /> */}
          <label>MeatBalls</label>
          <input
            type="checkbox"
            name="food"
            onChange={handleChange}
            value="meatballs"
          />
          <br />
          <label>Pap</label>
          <input
            type="checkbox"
            name="food"
            onChange={handleChange}
            value="pap"
          />
          <br />
          <label>Wors</label>
          <input
            type="checkbox"
            name="food"
            onChange={handleChange}
            value="wors"
          />
          <br />
          <label>Chakalaka</label>
          <input
            type="checkbox"
            name="food"
            onChange={handleChange}
            value="chakalaka"
          />
          <br />
          <h3>Time</h3>
          <label>0</label>
          <input type="radio" name="time" onChange={handleChange} value="day" />
          <br />
          <label>1</label>
          <input
            type="radio"
            name="time"
            onChange={handleChange}
            value="night"
          />
          <br />
          <h2>attending</h2>
          <label>true</label>
          <input
            name="attending"
            type="radio"
            value="true"
            onChange={handleChange}
          />
          <br />
          <label>false</label>
          <input
            name="attending"
            type="radio"
            value="false"
            onChange={handleChange}
          />
          <br />

          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>

      <ul>
        {submittedForm.map((data, index) => {
          console.log("data", data);
          return (
            <div key={index}>
              <p>Name: {data.name}</p>
              <p>Surname: {data.surname}</p>
              <p>food: {data.food}</p>

              <p>time: {data.time}</p>
              <p>attending: {data.attending}</p>
              <DeleteButton
                index={index}
                submittedForm={submittedForm}
                setSubmittedForm={setSubmittedForm}
              />
              <EditButton
                index={index}
                formInfo={formInfo}
                setFormInfo={setFormInfo}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Form;
