const express = require('express');
const router = express.Router()
const { KEY_ID, KEY_SECRET } = process.env;
router.use(express.json());
const crypto = require('crypto');
const billSchema = require("../model/billSchema");

const logRazorPayment = async (req,res) => {
  const secret = KEY_SECRET;
  const shasum = crypto.createHmac('sha256', secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest('hex');

  if (digest === req.headers['x-razorpay-signature']) {
      // console.log('Webhook verified');
      // console.log(req.body);
      // console.log(req.body.payload.payment.entity);
      const bill = findBillByOrderId(req.body.payload.payment.entity.order_id);
      if(bill){
        bill.status = true;
        await bill.save();
        console.log('Bill status updated to true:', bill);
      }
      else{
        console.log('Bill not found:', bill);
        res.status(400).send('bill not found');
      }
      res.status(200).send('Webhook received');
  } else {
      console.log('Webhook verification failed');
      res.status(400).send('Invalid signature');
  }
};

const findBillByOrderId = async (orderId) =>{
  const bill = await billSchema.find({orderId:orderId});
  if(bill){
    return bill;
  }
  else{
    return NULL;
  }
}

router.post("/",logRazorPayment);

module.exports = router;