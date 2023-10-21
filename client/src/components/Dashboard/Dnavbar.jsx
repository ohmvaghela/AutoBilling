import React from "react";
import "./Dashboard.css";
import DropdownButton from "./DropdownButton";
// import {DataContext} from './Dashboard';

const Dnavbar = () => {
  return (
    <div className="navbar">
      Dashboard
      <DropdownButton>Click me</DropdownButton>

    </div>
  );
};

export default Dnavbar;
