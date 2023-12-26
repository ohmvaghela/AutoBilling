import axios from "axios";
import React, { useState, useEffect } from "react";
import "./display.css";

export default function DisplayOrder() {
  const [billData, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    // setLoader(false);
    const email = "vaghelaohm@gmail.com";
    const Response = await axios
      .post("http://localhost:8000/fetchOrdersByEmail", {
        email: "vaghelaohm@gmail.com",
      })
      .then((response) => {
        // setLoader(true);
        setData(response.data);
      })
      .catch((err) => {
        // setLoader(true);
        alert(err.response.data);
        console.log(err);
      });
  };

  const sendEmail = async (order) => {
    setLoader(true);

    const email = "vaghelaohm@gmail.com";
    const Response = await axios
      .post("http://localhost:8000/sendEmail", {
        email: order.consumerEmail,
        id: order.billID
      })
      .then((response) => {
        setLoader(false);
        // setData(response.data);
      })
      .catch((err) => {
        setLoader(false);
        // alert(err.response.data);
        console.log(err);
      });

  }
  return (
    <>
      <div className="contain">
        <h1> Orders</h1>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900"></div>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Amount
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Send Email
              </th>
            </tr>
          </thead>
          <tbody>
            {billData.map((order) => (
              // <tr key={order.billID}>
              //   <td className="ml-5  border-spacing-44">{order.billID}</td>
              //   <td className="ml-5  border-spacing-44">{order.billAmount.$numberDecimal}</td>
              //   <td className="ml-5  border-spacing-44">{order.billStatus===1?"paid":"unpaid"}</td>
              // </tr>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={order.billID}
              >
                <td class="w-4 p-4 ">{order.billID}</td>
                <th
                  scope="row"
                  class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    class="w-10 h-10 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="Jese image"
                  />
                  <div class="ps-3">
                    <div class="text-base font-semibold">
                      {order.consumerEmail}
                    </div>
                    {/* <div class="font-normal text-gray-500">{order.billID}</div> */}
                  </div>
                </th>
                <td class="px-6 py-4">${order.billAmount.$numberDecimal}</td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                    {order.billStatus === true ? (
                      <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                    ) : (
                      <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
                    )}{" "}
                    {order.billStatus === true ? "paid" : "unpaid"}
                    {/* <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> {order.billStatus===1?"paid":"unpaid"} */}
                  </div>
                </td>
                <td class="px-6 py-4">
                  <button 
                    type="button" 
                    // className="avsvsfs"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={() => sendEmail(order)}
                  >
                    
                    {loader && <div className="spin"></div>}
                    {!loader && "Send Email"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
