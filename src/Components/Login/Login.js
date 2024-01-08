import axios from "axios";
import React, { createRef, useState } from "react";
import "./Login.css";
// console.log(event.target.value)
export function Login() {
  const [formData, setFormData] = useState({});
  const emailRef = createRef();
  const passwordRef = createRef();
  const handleSubmit = () => {
    if (handleVerification()) {
      axios
        .post("http://localhost:5000/api/login", formData)
        .then((response) => {
          //     console.log(response)
          //   console.log(response.data);
          if (response.status === 200)
            localStorage.setItem("items", JSON.stringify(response.data.token));
        })
        .catch((error) => console.log("error", error));
    }
  };
  const handleVerification = () => {
    if (passwordRef.current.value === "") return false;
    if (emailRef.current.value === "") return false;
    return true;
  };
  const handleChange = (event) => {
    //live storing of data as the user types
    //used in instead of direct because only 1 field data is saved
    formData[event.target.name] = event.target.value;
    setFormData(formData);
  };
  return (
    <>
      <form className="formContainer">
        <label>
          Email
          <input
            type="email"
            name="email"
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
          Login
        </button>
      </form>
    </>
  );
}
