const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
require('dotenv').config();
const {KEY_ID, KEY_SECRET} = process.env;

var razorpayInstance = new Razorpay({
    key_id: KEY_ID,
    key_secret: KEY_SECRET,
});

const fetchOrders = async (req,res)=>{
    console.log("fetch order");
    let options = {
        count : 100,
        // skip : req.query.skip
    }
    razorpayInstance.orders.all(options,(err,orders)=>{
        if(!err){
            const ids = [];
            orders.items.forEach((items)=>{
                ids.push(items.id);
            })
            res.send(orders);
            // res.send(ids);
        }
        else{
            res.send(err);
        }
    })
}
router.get('/', fetchOrders);
module.exports = router;