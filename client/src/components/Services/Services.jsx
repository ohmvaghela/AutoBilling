import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <>
      <div className="Service-container">
        <div className="Service">
          <img src="service1.jpg" alt="Card 1" className="Service-image" />
          <div className="Service-content">
            Automated billing system that creates and dispatches invoices for
            you.
          </div>
        </div>
        <div className="Service">
          <img src="service2.png" alt="Card 2" className="Service-image" />
          <div className="Service-content">
            Consistent follow-up emails to clients regarding unpaid invoices and
            dues.
          </div>
        </div>
        <div className="Service">
          <img src="service3.jpg" alt="Card 3" className="Service-image" />
          <div className="Service-content">
            Securely manage your billing information and payment data in one
            place.
          </div>
        </div>
      </div>
    </>
  );
}
