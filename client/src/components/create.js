
import React, { useState } from "react";
import "../App.css";

const Create = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [ShowButton, setShowButton] = useState(false);
  const [formName, setFormName] = useState("");

  const handleFormName = () => {
    setIsEdit((prev) => !prev);
  };

  const handleNameChange = (e) => {
    setFormName(e.target.value);
  };
  const handleShowButton = () => {
    setShowButton((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Create New Form</h2>
      </div>
      <div className="box" style={{ marginLeft: "250px" }}>
        <div className="formSection">
          <div className="inputContainer">
            {formName ? (
              <p>{formName}</p>
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                <h3>Untitled Form </h3>
              </div>
            )}
            <button
              onClick={handleFormName}
              style={{
                border: "none",
                color: "#000",
                background: "transparent",
                cursor: "pointer",
                marginLeft: "10px",
              }}
            >
              <i className="material-icons" style={{ fontSize: "24px" }}>
                edit
              </i>
            </button>
            <button onClick={handleShowButton} className="addButton">
              ADD INPUT
            </button>
            {ShowButton ? (
              <div style={{ display: "flex" }}>
                <button className="addButton">Text</button>
                <button className="addButton">Number</button>
                <button className="addButton">Email</button>
                <button className="addButton">Password</button>
                <button className="addButton">Date</button>
              </div>
            ) : (
              ""
            )}

            <button>SUBMIT</button>
          </div>
          <div className="formEditor">
            {isEdit ? (
              <input
                type="text"
                value={formName}
                onChange={handleNameChange}
                placeholder="Enter form name"
                onBlur={handleFormName}
              />
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                <p>Select to see editor</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <button style={{ width: "200px", marginLeft: "500px" }}>
        CREATE FORM
      </button>
    </div>
  );
};

export default Create;
