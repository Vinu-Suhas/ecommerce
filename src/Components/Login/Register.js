import axios from "axios";
import React, { createRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export function Register() {
  const [formData, setFormData] = useState({});
  const nav = useNavigate();
  const emailRef = createRef();
  const passwordRef = createRef();
  const nameRef = createRef();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleSubmit = () => {
    if (handleVerification()) {
      axios
        .post(
          "https://react-project2-backend-vinu.onrender.com/api/register",
          formData
        )
        .then((response) => {
          toast.success("Registration successful");
          nav("/login");
        })
        .catch((error) => toast.error(error.msg));
    }
  };
  const handleVerification = () => {
    if (emailRef.current.value === "") {
      toast.warn("mail is empty");
      return false;
    } else if (!emailRegex.test(emailRef.current.value)) {
      toast.warn("Invalid mail");
      return false;
    } else if (nameRef.current.value === "") {
      toast.warn("Name is empty");
      return false;
    } else if (passwordRef.current.value === "") {
      toast.warn("Password is empty");
      return false;
    } else if (passwordRef.current.value.length < 7) {
      console.log("password ");
      toast.warn("min password length should be 8");
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
        <div className="formfieldContainer">
          <h3 className="formHeading"> NAME:</h3>

          <input
            type="text"
            name="name"
            placeholder="Enter the name"
            id="name"
            onChange={handleChange}
            minLength={1}
            ref={nameRef}
          />
        </div>
        <div className="formfieldContainer">
          <h3 className="formHeading"> EMAIL:</h3>

          <input
            type="email"
            name="email;"
            placeholder="Enter the email"
            id="email"
            onChange={handleChange}
            minLength={1}
            ref={emailRef}
          />
        </div>
        <div className="formfieldContainer">
          <h3 className="formHeading"> PASSWORD:</h3>

          <input
            type="password"
            name="password"
            placeholder="Enter the password"
            id="password"
            onChange={handleChange}
            minLength={1}
            ref={passwordRef}
          />
        </div>
        <button onClick={() => handleSubmit()} type="button">
          REGISTER
        </button>
      </form>
    </>
  );
}
