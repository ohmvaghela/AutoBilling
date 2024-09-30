import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProfileIcon } from "./OtherFn";
import { useUserStatContext } from "../../Context/Context";

export default function Dashboard() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const {stat,setStat} = useUserStatContext();
  useEffect(()=>{
    // console.log("in Dashboard");
    // console.log(localStorage.getItem("auth-token"));
    if(!localStorage.getItem("auth-token")){
      navigate("/");
      setStat(false);
    }
  },[])
  return (
    <>
      <Loader loader={loader} />

      <div>
        <div className="dashboard">
          <div className="logo">
            <Link to="/" className="logo">
              <span style={{ color: "black" }}>Auto</span>
              <span style={{ color: "white" }}>Billing</span>
            </Link>
          </div>
          <ProfileIcon/>
          <div className="sidePanel">
            <Link to="./">
              <button className="sidePanelItem">Profile</button>
            </Link>
            <Link to="./Bills">
              <button className="sidePanelItem">All Bills</button>
            </Link>
            <Link to="./Create">
              <button className="sidePanelItem">Create Bill</button>
            </Link>
          </div>

          <div className="contents">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export function Loader({ loader }) {
  if (loader) {
    return (
      <div className="loader-block">
        <div className="loader"></div>
      </div>
    );
  } else return null;
}
