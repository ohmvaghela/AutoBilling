import React, {  useState, useRef } from "react";
import "./Sign.css";

import "bootstrap/dist/css/bootstrap.min.css";
import validator from "validator";
import axios from "axios";
import { useUserDataContext, useUserStatContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const defaultVal = {
    name:"",
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    password: "",
};
export default function SignUp({setAlertVal,setLoader}) {
  const navigate = useNavigate(); 
  const {stat,setStat} = useUserStatContext();
  const {userData,setUserData} = useUserDataContext();

  const [signUp, setSignUp] = useState({
    name:"",
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    password: "",
  });
  const formRef = useRef(null);
  const signUpUser = async () => {
    setLoader(true);
    await axios
    // .post("http://localhost:8000/addUser", signUp)
    .post("https://autobilling-gu29.onrender.com/addUser",signUp)
    .then((data) => {
      console.log(data);
      if(data.data[0] === false){
          setAlertVal(true);
        }
        localStorage.setItem("auth-token", data.data.token);
        setUserData(data.data.user);
        setLoader(false);
        setStat(true);
        navigate("/Dashboard")
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
      
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (!validator.isEmail(signUp.email)) {
      formRef.current.reportValidity();
      console.log("email not valid");
      setSignUp(defaultVal);
    } 
    else if (formRef.current.checkValidity()) {
      console.log("Form is valid");
      signUpUser();
      setSignUp(defaultVal);
    }
    else {
      console.log("form invalid");
      formRef.current.reportValidity();
      setSignUp(defaultVal);
    }
  };
  return (
    <>
      <label className="slider signup" htmlFor="chk">
        SignUp
      </label>
      <form className="signUpForm" ref={formRef}>
        <input
          value={signUp.name}
          onChange={(e) => {
            setSignUp({ ...signUp, name: e.target.value });
          }}
          className="form"
          type="text"
          name="shopname"
          placeholder="name"
          maxLength={15}
          minLength={3}
          required
        />
        <input
          value={signUp.firstname}
          onChange={(e) => {
            setSignUp({ ...signUp, firstname: e.target.value });
          }}
          className="form"
          type="text"
          name="name"
          placeholder="first name"
          maxLength={15}
          minLength={3}
          required
        />
        <input
          value={signUp.lastname}
          onChange={(e) => {
            setSignUp({ ...signUp, lastname: e.target.value });
          }}
          className="form"
          type="text"
          name="name"
          placeholder="last name"
          maxLength={15}
          minLength={3}
          required
        />
        <input
          value={signUp.email}
          onChange={(e) => {
            setSignUp({ ...signUp, email: e.target.value });
          }}
          className="form"
          type="email"
          name="email"
          placeholder="Email ID"
          required
        />
        <input
          value={signUp.number}
          onChange={(e) => {
            setSignUp({ ...signUp, number: e.target.value });
          }}
          className="form"
          type="integer"
          name="number"
          placeholder="Number"
          required
        />
        <input
          value={signUp.password}
          onChange={(e) => {
            setSignUp({ ...signUp, password: e.target.value });
          }}
          className="form"
          type="password"
          name="password"
          placeholder="password"
          // minLength={5}
          // maxLength={20}
          required
          // onInvalid={(e) =>
          //   e.currentTarget.setCustomValidity(
          //     "Length between 5-20 and must contain number"
          //   )
          // }
        />
        <button className="signUpButton" onClick={handleClick}>
          Sign Up
        </button>
      </form>
    </>
  );
}
