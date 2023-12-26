import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DataContext from "./context";

const Form = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [consumerName, setconsumerName] = useState("");
  const [consumerEmail, setconsumerEmail] = useState("");
  const [shopEmail, setshopEmail] = useState("");
  const [billAmount, setbillAmount] = useState("");
  const [billDescription, setbillDescription] = useState("");
  const {load,setLoad} = useContext(DataContext);
  const Popup = () => {
    return (
      <dialog className="popup">
        <h1>This is a popup!</h1>
        <p>Click the button below to close the popup.</p>
        <button onClick={() => document.querySelector('dialog').close()}>Close</button>
      </dialog>
    );
  };
  const createOrder = async (e) => {
    e.preventDefault();
    console.log("here");
    setSubmitted(true);
    const Billresponse = await axios.post("http://localhost:8000/addBill", {
      Name,
      Email,
      consumerName,
      consumerEmail,
      shopEmail, // Add a comma here
      billAmount,
      billDescription,
    });
    const Emailresponse = await axios.post("http://localhost:8000/sendEmail", {
      email: consumerEmail,
      id: 1,
    });
    console.log([Billresponse,Emailresponse]);
    setLoad("bill");
  };
  const [submitted, setSubmitted] = useState(false);
 
    return (
      <div className="flex flex-col items-center py-10">
        <h1 className="text-3xl font-bold mb-10">Contact Form</h1>
        <form
          className="flex flex-col w-full max-w-md"
        >
          {/* <form className="flex flex-col w-full max-w-md"> */}
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="mb-5 py-2 px-3 border rounded"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="mb-5 py-2 px-3 border rounded"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            name="consumerName"
            placeholder="Consumer Name"
            className="mb-5 py-2 px-3 border rounded"
            onChange={(e) => {
              setconsumerName(e.target.value);
            }}
          />

          <input
            type="email"
            name="consumerEmail"
            placeholder="Consumer Email"
            className="mb-5 py-2 px-3 border rounded"
            onChange={(e) => {
              setconsumerEmail(e.target.value);
            }}
          />

          <input
            type="email"
            name="shopEmail"
            placeholder="Shop Email"
            className="mb-5 py-2 px-3 border rounded"
            onChange={(e) => {
              setshopEmail(e.target.value);
            }}
          />

          <input
            type="number"
            name="billAmount"
            placeholder="Bill Amount"
            className="mb-5 py-2 px-3 border rounded"
            onChange={(e) => {
              setbillAmount(e.target.value);
            }}
          />

          <input
            type="text"
            name="billDescription"
            placeholder="Bill Description"
            className="mb-5 py-2 px-3 border rounded"
            onChange={(e) => {
              setbillDescription(e.target.value);
            }}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={createOrder}
          >
            Submit
          </button>
        </form>
      </div>
    );
  
};

export default Form;
