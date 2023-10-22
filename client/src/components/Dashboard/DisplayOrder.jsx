import axios from "axios";
import React, { useState, useEffect } from "react";

export default function DisplayOrder() {
  const [billData, setData] = useState([]);
  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    const email = "vaghelaohm@gmail.com";
    const Response = await axios
      .post("http://localhost:8000/fetchOrdersByEmail", {
        email: "vaghelaohm@gmail.com",
      })
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        alert(err.response.data);
        console.log(err);
      });
  };

  return (
    <>
      <h1> Orders</h1>
      <div className=" flex items-center">

        <table className="table-auto">
          <thead>
            <tr>
              <th>id</th>
              <th>amount</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {billData.map((order) => (
              <tr key={order.billID}>
                <td className="ml-5  border-spacing-44">{order.billID}</td>
                <td className="ml-5  border-spacing-44">{order.billAmount.$numberDecimal}</td>
                <td className="ml-5  border-spacing-44">{order.billStatus===1?"paid":"unpaid"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
