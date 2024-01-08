import axios from "axios";
import React, { createRef, useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

export function Login() {
  const [formData, setFormData] = useState({});
  const emailRef = createRef();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRef = createRef();
  const handleSubmit = () => {
    if (handleVerification()) {
      axios
        .post("http://localhost:5000/api/login", formData)
        .then((response) => {
          if (response.status === 200)
            localStorage.setItem("token", JSON.stringify(response.data.token));
          toast.success("Login successful");
        })
        .catch((error) => console.log("error", error));
    }
  };
  const handleVerification = () => {
    if (emailRef.current.value === "") {
      toast.warn("mail is empty");
      return false;
    } else if (!emailRegex.test(emailRef.current.value)) {
      toast.warn("Invalid mail");
      return false;
    } else if (passwordRef.current.value === "") {
      toast.warn("password invalid");
      return false;
    }

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
        <p>
          Havent created account <NavLink to="/register">create here</NavLink>
        </p>
      </form>
    </>
  );
}
