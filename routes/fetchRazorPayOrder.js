const express = require("express");
const router = express.Router();
const Razorpay = require('razorpay');
require('dotenv').config();
const {KEY_ID,KEY_SECRET} = process.env;

var razorpayInstance = new Razorpay({
    key_id: KEY_ID,
    key_secret: KEY_SECRET,
});

const fetchRazorPayOrder = async (req,res)=>{
    razorpayInstance.orders.fetch(req.body.orderId,(err,order)=>{
        if(!err){
            res.send(order);
        }
        else{
            res.send(err);
        }
    });
};
router.post('/',fetchRazorPayOrder);
module.exports = router;