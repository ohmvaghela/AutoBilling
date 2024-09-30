const express = require('express');
const router = express.Router();
const { KEY_ID, KEY_SECRET } = process.env;
router.use(express.json());
const crypto = require('crypto');
const billSchema = require("../model/billSchema");

const logRazorPayment = async (req, res) => {
    const secret = KEY_SECRET;
    const shasum = crypto.createHmac('sha256', secret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest('hex');

    if (digest === req.headers['x-razorpay-signature']) {
        console.log('Webhook verified');
        const bill = await findBillByOrderId(req.body.payload.payment.entity.order_id);
        if (bill) {
            bill.status = true;
            await bill.save();
            console.log('Bill status updated to true:', bill);
            res.status(200).send('Webhook received');
        } else {
            console.log('Bill not found:', bill);
            res.status(400).send('Bill not found');
        }
    } else {
        console.log('Webhook verification failed');
        res.status(400).send('Invalid signature');
    }
};

const findBillByOrderId = async (orderId) => {
    try {
        const bill = await billSchema.findOne({ orderId: orderId });
        if (bill) {
            return bill;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error finding bill:', error);
        return null;
    }
};

router.post("/", logRazorPayment);

module.exports = router;
