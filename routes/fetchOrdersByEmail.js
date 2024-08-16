const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const billSchema = require("../model/billSchema");
const axios = require("axios");

router.use(express.json());

const fetchOrders = async (req, res) => {
  try {
    const email = req.body.shopEmail;
    console.log(["query", req.query]);
    console.log(["body", JSON.stringify(req.body)]);
    console.log(["email", email]);

    const orders = await billSchema.find({ shopEmail: email });
    const fetchOrderPromises = orders.map(async (order) => {
      try {
        const { data } = await axios.post("https://autobilling-gu29.onrender.com/fetchRazorPayOrder", {
          orderId: order.orderId,
        });
        console.log(data.id,data.status);
        if (data.status === "paid") {
          order.billStatus = true;
          await order.save(); // Save the updated order back to the database
        }
      } catch (err) {
        console.log("razor-mongo-bill error: ", order.orderId, err);
      }
    });

    await Promise.all(fetchOrderPromises);

    console.log("fetchOrdersbyEmail:", orders);
    res.send(orders);
  } catch (e) {
    console.log("fetchOrders error: ", e);
    res.send(["error", e]);
  }
};

router.post("/", fetchOrders);

module.exports = router;