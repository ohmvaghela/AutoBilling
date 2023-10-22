const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const billSchema = require("../model/billSchema");
var bodyParser = require('body-parser')
const app = express();

router.use(express.json());

const fetchOrders = async (req, res) => {
    try{
        const email  = req.body;
        console.log(["qurey",req.query]);
        console.log(["body",JSON.stringify(req.body)]);
        console.log(["email",email]);
        // const orders = await billSchema.find();
        // const orders = await billSchema.findById("65342506a4f885f158fec8f2")
        const orders = await billSchema.find({ shopEmail: req.body.email });
        res.send(orders);
    }catch(e){
        res.send(["error",e]);
    }
}

router.post("/", fetchOrders);

module.exports = router;