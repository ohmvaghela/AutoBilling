// import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import * as Components from "./Components";

function SignupForm() {
  const [signIn, toggle] = useState(true);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const fetchUsers = async () => {
    const {data} = await axios.get("http://localhost:8000/addUser");
    console.log(data);
  }

  const loginUser = async () => {
    await axios.post("http://localhost:8000/loginUser", values).then((data)=>{
      console.log(data);
    }).catch((err)=>{
      console.log(err);
    });
  }
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex justify-center items-center mt-[100px]">
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Input type="text" placeholder="Name" />
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
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
              placeholder="Email"
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
