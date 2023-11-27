import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Profile() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch();
    }, []);

    const addData = (data) => {
        setData(data);
    };
    const fetch = async () => {
        const email = "vaghelaohm@gmail.com";
        const Response = await axios
            .post("http://localhost:8000/fetchOrdersByEmail", {
                email: "vaghelaohm@gmail.com",
            })
            .then((response) => {
                console.log(response.data);
                addData(response.data);
                // setData((data) => data = response.data);
                // console.log(data);
            })
            .catch((err) => {
                alert(err.response.data);
                console.log(err);
            });
    };
    console.log(data);
    return (
        
            <div className="text-center">
                <h1>Profile</h1>

                {/* <p>Name: {data.name}</p> */}
                <p> Email: {data[0]?.shopEmail} </p>
                {/* <p>Phone: {data.phone}</p> */}
            </div>
                
        
    );
}
