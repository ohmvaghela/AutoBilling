const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
require('dotenv').config();
const { KEY_ID, KEY_SECRET } = process.env;

var razorpayInstance = new Razorpay({
    key_id: KEY_ID,
    key_secret: KEY_SECRET,
});




const createOrder = async(req,res)=>{
    var options = {
        amount: 5100,  // amount in the smallest currency unit
        currency: "INR",  
        receipt: "rcp1",
        notes:{
            description : "notes desc",
            language : " lang",
            access : "access"
        }
      };  
    var my_order;
    razorpayInstance.orders.create(options,  
        (err, order)=>{ 
          my_order = order;
          if(!err) 
            res.json(order) 
          else
            res.send(err); 
        } 
    ) 
    
}

router.post('/', createOrder);

module.exports = router;
  
