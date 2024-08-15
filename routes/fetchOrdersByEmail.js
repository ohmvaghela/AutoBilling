const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const billSchema = require("../model/billSchema");
const axios = require("axios");

router.use(express.json());

const fetchOrders = async (req, res) => {
  try {
    const email = req.body;
    console.log(["qurey", req.query]);
    console.log(["body", JSON.stringify(req.body)]);
    console.log(["email", email]);
    // const orders = await billSchema.find();
    // const orders = await billSchema.findById("65342506a4f885f158fec8f2")
    const orders = await billSchema.find({ shopEmail: req.body.shopEmail });
    const fetchOrderPromises = orders.map((order) =>
      axios
        .post("http://localhost:8000/fetchRazorPayOrder", {
          orderId: order.orderId,
        })
        .then((data) => {
          if (data.amount_due === 0) {
            order.billStatus = true;
          }
        })
        .catch((err) => {
          console.log("razor-mongo-bill error: ", order.orderId);
        })
    );
    await Promise.all(fetchOrderPromises);

    console.log("fetchOrdersbyEmail:", orders);
    res.send(orders);
  } catch (e) {
    res.send(["error", e]);
  }
};

router.post("/", fetchOrders);

module.exports = router;
