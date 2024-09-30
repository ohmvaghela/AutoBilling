import React, { useEffect } from "react";
import "./Pricing.css";
import { useCountContext } from "../../Context/Context";

export default function Pricing() {
  const { count, setCount } = useCountContext();
  useEffect(() => {
    console.log("count updated : ", count);
  }, [count]);
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <div className="title">
                  <i className="fa fa-paper-plane"></i>
                  <h2>Monthly</h2>
                </div>
                <div className="price">
                  <h4>₹X</h4>
                </div>
                <div className="option">
                  <ul>
                    <li>
                      {" "}
                      <i className="fa fa-check"></i>✅100 Invoices per day
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-check"></i>✅Regular Email Reminder
                      Service{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-check"></i>❎Telecom bot service{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-times"></i>❎Personal Agent{" "}
                    </li>
                  </ul>
                </div>
                <a
                  href="#"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  Coming Soon{" "}
                </a>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card">
                <div className="title">
                  <i className="fa fa-plane"></i>
                  <h2>Quaterly</h2>
                </div>
                <div className="price">
                  <h4>₹Y</h4>
                </div>
                <div className="option">
                  <ul>
                    <li>
                      {" "}
                      <i className="fa fa-check"></i>✅100 Invoices per day
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-check"></i>✅Regular Email Reminder
                      Service{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-check"></i>✅Telecom bot service{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-times"></i>❎Personal Agent{" "}
                    </li>
                  </ul>
                </div>
                <a
                  href="#"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  Coming Soon{" "}
                </a>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card">
                <div className="title">
                  <i className="fa fa-rocket"></i>
                  <h2>Annually</h2>
                </div>
                <div className="price">
                  <h4>₹Z</h4>
                </div>
                <div className="option">
                  <ul>
                    <li>
                      {" "}
                      <i className="fa fa-check"></i>✅100 Invoices per day
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-check"></i>✅Regular Email Reminder
                      Service{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-check"></i>✅Telecom bot service{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-times"></i>✅Personal Agent{" "}
                    </li>
                  </ul>
                </div>
                <a
                  href="#"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  Coming Soon{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
