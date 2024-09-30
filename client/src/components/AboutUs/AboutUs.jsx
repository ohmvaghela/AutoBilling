import React from 'react';
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about_us">
      <div className="about_us_image">
        <img src="/about_us_1.png" alt="Company Building" />
      </div>
      <div className="about_us_text">
        <h1>About Us</h1>
        <p>
          Our website handles payments, bill creation, and bill reminders for shop owners. 
          We streamline the invoicing process, ensuring that your customers are notified about their outstanding payments efficiently.
        </p>
        <p>
          Founded with the mission to simplify financial management for businesses, we provide tools that automate and manage your billing needs, 
          allowing you to focus on growing your business.
        </p>
        <p>
          Let us handle your customers' payment reminders effortlessly and efficiently, so you can concentrate on what you do best.
        </p>
      </div>
    </div>
  );
}
