const express = require("express");
const stripe = require("stripe")(
  "sk_test_51Nyv5xSI8ufacH4If3R0VOKHYsp8WhSDSBiKpJOetUIM9xRmLeXarELkOY85rN3RGe92UPyMjtZaMs8Lk5CHGONa00Mam7joB1"
);
const { v4: uuidv4} = require('uuid');

const router = express.Router();
const userSchema = require("../model/userSchema.js");

router.use(express.json());

router.get("/", (req, res, next) =>{
  console.log("Get response from paymentStatus");
  res.json({
    message: 'It works'
  });
})

router.post("/pay", (req, res, next) =>{
  console.log(req.body.token);
  const {token, amount} = req.body;
  const idempotencyKey = uuidv4();

  return stripe.customers.create({
    email: token.email,
    source: token,
  }).then(customer =>{
    stripe.charges.create({
      amount,
      currency: "inr",
      customer: customer.id,
      receipt_email: token.email
    }, {idempotencyKey})
  }).then(result => {
    res.status(200).json(result);
  }).catch(err => {
    res.status(500).json(err);
  })
});

module.exports = router;


