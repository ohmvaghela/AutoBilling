const express = require("express");
const router = express.Router();
const billSchema = require("../model/billSchema.js");

router.use(express.json());

router.get('/',async (req,res)=>{
    const email = req.query.email;
    const bills = await billSchema.find({consumerEmail:email});
    res.send(bills);
});
module.exports = router;