const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const userSchema = require("../model/userSchema.js");

router.use(express.json());

router.post("/",async (req,res)=>{
    const d = await userSchema.find();
    var size = d.length+1;
    try{
        const user = new userSchema({
            shopID : size,
            createdAt : Date.now() ,
            shopName : req.body.shopName,
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            shopEmail : req.body.shopEmail
        });
        const newUser = await user.save().then((x)=>{
            console.log(x);
            res.send("added succesfully");
            return;
        }).catch((err)=>{
            console.log(err);
            res.send(["user not added server error : ",err])
        });
    }catch(err){
        console.log(err);
        res.send(["user not added client size: \n",err])
    }
});

module.exports = router;