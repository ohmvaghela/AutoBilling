import React from 'react'
import "./Homepage.css";
import { Link } from 'react-router-dom';

export default function Topsegment() {
  return (
    <>
    <div className="half_div">
      <div className="text_container">
        <h1>
          <span className="subtle">Your </span>
          <span className="highlight">Invoices </span>
          <span className="subtle">Automated</span>
        </h1>
        <p>
          Streamline invoicing with Autobilling software. Create professional
          invoices in seconds, freeing you to focus on your business.
        </p>
        <Link to={'/Pricing'}>
        <button>Join Now</button>
        </Link>
      </div>

      <img src="/invoice4.svg" alt="Invoice" />
    </div>
  </>
  )
}
