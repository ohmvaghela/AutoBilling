const express = require("express");
const router = express.Router();
const userSchema = require("../model/userSchema.js");
const cookieParser = require("cookie-parser");

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
            shopEmail : req.body.shopEmail,
            password: req.body.password
        });
        const token = await user.generateAuthToken();
        
        const newUser = await user.save().then((x)=>{
            // console.log(x);
            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 60000),
                httpOnly: true,
              });
            console.log("user added succesfully");
            res.send("added succesfully");
            return;
        }).catch((err)=>{
            console.log(err);
            res.send(["user not added server error : ",err])
        });
    }catch(err){
        console.log(err);
        res.send(["user not added client error : ",err])
    }
});

module.exports = router;