import React, { useState } from "react";
import "./Sign.css";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import "bootstrap/dist/css/bootstrap.min.css";
import {AlertFn,Loader} from "./OtherFn";

export default function Sign() {
  const [alertVal, setAlertVal] = useState(false);
  const [loader,setLoader] = useState(false);
  
  return (
    <>
      <Loader loader={loader}/>
      <AlertFn alertVal={alertVal} setAlertVal={setAlertVal}/>
      <div className="box">
        <input type="checkbox" id="chk" />
        <SignUp setAlertVal={setAlertVal} setLoader={setLoader} />
        <LogIn setLoader={setLoader}/>
      </div>
    </>
  );
}
