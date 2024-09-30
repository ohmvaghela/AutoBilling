const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const billSchema = require("../model/billSchema");
const axios = require("axios");
const { BACKEND_URL } = process.env;
router.use(express.json());

const fetchOrders = async (req, res) => {
  try {
    const email = req.body.shopEmail;
    console.log(["query", req.query]);
    console.log(["body", JSON.stringify(req.body)]);
    console.log(["email", email]);

    const orders = await billSchema.find({ shopEmail: email });

    // console.log("fetchOrdersbyEmail:", orders);
    res.send(orders);
  } catch (e) {
    console.log("fetchOrders error: ", e);
    res.send(["error", e]);
  }
};

router.post("/", fetchOrders);

module.exports = router;