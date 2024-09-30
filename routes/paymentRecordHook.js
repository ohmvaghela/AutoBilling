const express = require('express');
const router = express.Router()
const { KEY_ID, KEY_SECRET } = process.env;
router.use(express.json());
const crypto = require('crypto');

const logRazorPayment = async (req,res) => {
  const secret = KEY_SECRET;
  const shasum = crypto.createHmac('sha256', secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest('hex');

  if (digest === req.headers['x-razorpay-signature']) {
      console.log('Webhook verified');
      console.log(req.body);
      console.log(req.body.payload.payment.entity);

      res.status(200).send('Webhook received');
  } else {
      console.log('Webhook verification failed');
      res.status(400).send('Invalid signature');
  }
};


router.post("/",logRazorPayment);

module.exports = router;