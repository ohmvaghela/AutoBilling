import React from "react";
import { Link } from "react-router-dom";
const Form = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-10">Contact Form</h1>

      <form className="flex flex-col w-full max-w-md">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="mb-5 py-2 px-3 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="mb-5 py-2 px-3 border rounded"
        />

        <textarea
          name="message"
          placeholder="Your message"
          className="mb-5 py-2 px-3 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
          {/* <Link to="#"> Submit</Link> */}
        </button>
      </form>
    </div>
  );
};

export default Form;
