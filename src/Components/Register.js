import axios from "axios";
import React, { createRef, useState } from "react";
// console.log(event.target.value)
export function Register() {
  const [formData, setFormData] = useState({});
  const emailRef = createRef();
  const passwordRef = createRef();
  const nameRef = createRef();
  const handleSubmit = () => {
    // console.log(formData);
    if (handleVerification()) {
      axios
        .post("http://localhost:5000/api/register",formData)
        .then((response) => {
          console.log("response after post login", response);
        })
        .catch((error) => console.log("error", error));
    }
  };
  const handleVerification = () => {
    return true;
  };
  const handleChange = (event) => {
    //live storing of data as the user types
    //used in instead of direct because only 1 field data is saved
    formData[event.target.name] = event.target.value;
    //
    setFormData(formData);
  };
  return (
    <>
      <form className="formContainer">
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter the name"
            id="name"
            onChange={handleChange}
            minLength={1}
            ref={nameRef}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email;"
            placeholder="Enter the email"
            id="email"
            onChange={handleChange}
            minLength={1}
            ref={emailRef}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter the password"
            id="password"
            onChange={handleChange}
            minLength={1}
            ref={passwordRef}
          />
        </label>
        <button onClick={() => handleSubmit()} type="button">
          Sumbit
        </button>
      </form>
    </>
  );
}
