import axios from "axios";
import React, { useState, useEffect } from "react";

export default function DisplayOrder() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    const { data } = await axios.get("http://localhost:8000/fetchOrders");
    console.log(data);
    setData(data);
    // return data;
  };

  // Check the type of the `data` state variable before calling the `map()` method
  if (Array.isArray(data.items)) {
    return (
      <>
        <h1> Orders</h1>
        
          <table className="table-fixed">
            <thead>
              <tr>
                <th>id</th>
                <th>amount</th>
                <th>status</th>
              </tr>
            </thead>
          <tbody>

            
            {data.items.map((order) => (
                <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.amount}</td>
                <td>{order.attempts}</td>
                </tr>
            ))}
        </tbody>
        </table>
      </>
    );
  } else {
    return (
      <div>
        <h1>No orders found</h1>
      </div>
    );
  }
}
