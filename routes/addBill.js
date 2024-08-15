const express = require("express");
const router = express.Router();
const billSchema = require("../model/billSchema.js");
const Razorpay = require("razorpay");
const { resolve } = require("path");
router.use(express.json());
require("dotenv").config();
const { KEY_ID, KEY_SECRET } = process.env;

var razorpayInstance = new Razorpay({
  key_id: KEY_ID,
  key_secret: KEY_SECRET,
});
const createOrder = (a) => {
  return new Promise((resolve, reject) => {
    var options = {
      amount: a.amount*100,
      currency: "INR",
      receipt: "rcp1",
      notes: {
        description: "notes desc",
        language: " lang",
        access: "access",
      },
    };
    razorpayInstance.orders.create(options, (err, order) => {
      if (err) {
        reject(err);
      } else {
        resolve(order);
      }
    });
  });
};

router.post("/", async (req,res)=>{
    const ad= await billSchema.find();
    var billno= ad.length+1;
    var orderid;
    try{
        var order = await createOrder({amount:req.body.billAmount});
        orderid = order.id;
        console.log(req.body);
        const bill = new billSchema({
            billID : billno,
            orderId : orderid,
            consumerName : req.body.consumerName,
            consumerEmail: req.body.consumerEmail,
            shopEmail : req.body.shopEmail,
            billAmount: req.body.billAmount,
            billDescription: req.body.billDescription
        });
        const newBill = await bill.save().then((x)=>{
          // console.log(razorpayInstance);  
          console.log("added succesfully");
            res.send("bill added succesfully");
            return;
        })
    }catch(err){
        console.log(["bill not added" , err]);
        res.send("bill not added");
    }
});

module.exports = router;