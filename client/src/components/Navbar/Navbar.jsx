import React, { useEffect } from "react";
import "./Navbar.css";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";
import { ProfileIcon } from "../Dashboard/OtherFn";
import { useUserStatContext } from "../../Context/Context";
export default function Navbar() {
  const {stat,setStat} = useUserStatContext();
  return (
    <>
      <div className="navbar">
        <div className="flex-container">
          <Link to={"/"} className="flex-item">
            <span className="logo_black" style={{ color: "black" }}>
              Auto
            </span>
            <span className="logo_white" style={{ color: "white" }}>
              Billing
            </span>
          </Link>
          <Link to={"/Services"} className="flex-item">
            Services
          </Link>
          <Link to={"/Pricing"} className="flex-item">
            Pricing
          </Link>
          <Link to={"/AboutUs"} className="flex-item">
            About Us
          </Link>
        </div>

        <UserStatus icon={stat}/>

      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
}

function UserStatus({icon}){
  if(icon === true){
    return <ProfileIcon/>
  }
  else
    return(
      <Link to={"/Sign"}>
       <Button className="Signin_Signup">Sign In/ Sign Up</Button>
      </Link> 
    ) 
  
} 