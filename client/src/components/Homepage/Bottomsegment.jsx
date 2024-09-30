import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

export default function Bottomsegment() {
  return (
    <>
      <div className="half_div">
        <img src="/invoice3.png" alt="Invoice" />
        <div className="text_container">
          <h1>
            <span className="subtle">Effortless </span>
            <span className="highlight">Payment </span>
            <span className="subtle">Reminders</span>
          </h1>
          <p>
            Let us take care of notifying your customers about their outstanding
            payments, so you don't have to
          </p>
          <Link to={"/Pricing"}>
            <button>Join Now</button>
          </Link>
        </div>
      </div>
    </>
  );
}
