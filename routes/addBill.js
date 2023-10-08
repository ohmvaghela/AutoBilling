const express = require("express");
const router = express.Router();
const billSchema = require("../model/billSchema.js");

router.use(express.json());

router.post("/", async (req,res)=>{
    const ad= await billSchema.find();
    var billno= ad.length+1;

    try{
        const bill = new billSchema({
            billID : billno,
            consumerName : req.body.consumerName,
            consumerEmail: req.body.consumerEmail,
            shopEmail : req.body.shopEmail,
            dateTime : req.body.dateTime,
            billAmount: req.body.billAmount,
            billDescription: req.body.billDescription
        });
        const newBill = await bill.save().then((x)=>{
            console.log("added succesfully");
            res.send("added succesfully");
            return;
        })
    }catch(err){
        console.log(["bill not added" , err]);
        res.send("bill not added");
    }
});

module.exports = router;