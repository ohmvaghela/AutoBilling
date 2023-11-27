import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { useContext } from "react";
// import { DataContext } from "./Dashboard";
import DataContext from "./context";
const Sidebar = ({ children }) => {
  const {load,setLoad} = useContext(DataContext);

  return (
      <div className="sidebar">
        <nav>
          <div className="text-3xl mb-8"> AutoBilling </div>
          <button className="box-border h-22 w-40 p-4 border-4 hover:bg-gray-200 mb-4 " onClick={() => setLoad("bill")}>
            Bills
          </button>
          <br></br>
          <button className="box-border h-22 w-40 p-4 border-4 hover:bg-gray-200 mb-4 " onClick={()=>setLoad("profile")}>
            Profile
          </button>
          <br></br>
          <button className="box-border h-22 w-40 p-4 border-4 hover:bg-gray-200 mb-4 " onClick={()=>{setLoad("NewBill")}}>
              Create New
              <br />
              Bill
          </button>
        </nav>
      </div>
  );
};

export default Sidebar;
