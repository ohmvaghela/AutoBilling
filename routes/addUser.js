const express = require("express");
const router = express.Router();
const userSchema = require("../model/userSchema.js");
const cookieParser = require("cookie-parser");

router.use(express.json());
const cur_route = "addUser : ";
router.post("/",async (req,res)=>{
    const d = await userSchema.find();
    var size = d.length+1;
    try{
        const user = new userSchema({
            shopID : size,
            createdAt : Date.now() ,
            shopName : req.body.name,
            firstName : req.body.firstname,
            lastName : req.body.lastname,
            shopEmail : req.body.email,
            password: req.body.password
        });
        const token = await user.generateAuthToken();
        const newUser = await user.save().then((x)=>{
            // console.log(cur_route+x);
            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 60000),
                httpOnly: true,
              });
            console.log(cur_route+"user added succesfully");
            res.send("added succesfully");
            return;
        }).catch((err)=>{
            console.log(cur_route+"user not added");
            res.send(["user not added server error : ",err])
        });
    }catch(err){
        console.log([cur_route,err]);
        res.send(["user not added client error : ",err])
    }
});

router.get("/", async(req,res)=>{
    const d = await userSchema.find();
    res.send(d);
})

module.exports = router;