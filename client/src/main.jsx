import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./components/SignupForm/styles.css";
import { BrowserRouter as Router } from "react-router-dom";
// import { NavbarProvider } from "./components/Navbar/NavbarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
