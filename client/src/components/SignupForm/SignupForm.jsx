// import React from "react";
import { useState, useEffect } from "react";
// import useNavigate from "react-router-dom";
import axios from "axios";
import * as Components from "./Components";
// import {Alert} from "@material-tailwind/react"

function SignupForm() {
  // const navigate = useNavigate();
  const [signIn, toggle] = useState(true);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [signupvalues, setSignupvalues] = useState({
    name: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const fetchUsers = async () => {
    const { data } = await axios.get("http://localhost:8000/addUser");
    console.log(data);
  };

  const loginUser = async () => {
    await axios
      .post("http://localhost:8000/loginUser", values)
      .then((response) => {
        console.log(response);
        if(response.statusText === "OK"){
          window.location.href = "/home";
          console.log("hi");
        }
      })
      .catch((err) => {
        alert(err.response.data);
        console.log(err);
      });
  };

  const signupUser = async () => {
    await axios
      .post("http://localhost:8000/addUser", signupvalues)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleChangeSignup = (e) => {
    setSignupvalues({ ...signupvalues, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  const handleSubmitSignup = (e) => {
    e.preventDefault();
    signupUser();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex justify-center items-center mt-[100px]">
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSubmitSignup}>
            <Components.Title>Create Account</Components.Title>
            <Components.Input
              type="text"
              name="name"
              value={signupvalues.name}
              onChange={handleChangeSignup}
              placeholder="Shop Name"
            />
            <Components.Input
              type="text"
              name="firstname"
              value={signupvalues.firstname}
              onChange={handleChangeSignup}
              placeholder="First Name"
            />
            <Components.Input
              type="text"
              name="lastname"
              value={signupvalues.lastname}
              onChange={handleChangeSignup}
              placeholder="Last Name"
            />
            <Components.Input
              type="email"
              name="email"
              value={signupvalues.email}
              onChange={handleChangeSignup}
              placeholder="Shop Email"
            />
            <Components.Input
              type="password"
              name="password"
              value={signupvalues.password}
              onChange={handleChangeSignup}
              placeholder="Password"
            />
            <Components.Button>Sign up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSubmit}>
            <Components.Title>Sign in</Components.Title>
            <Components.Input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Shop Email"
            />
            <Components.Input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <Components.Anchor href="#">
              Forgot your password?
            </Components.Anchor>
            <Components.Button>Sign in</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please log in with your personal info.
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign in
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
}

export default SignupForm;
