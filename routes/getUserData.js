const express = require('express');
const router = express.Router();

const userSchema = require('../model/userSchema');

router.use(express.json());

const getUserData = async (req,res)=>{
    try{
        const id = req.body._id;
        console.log(id);
        const user = await userSchema.findById(id);
        res.status(200).send(user);
    }catch(e){
        res.status(404).send("user not found");
    }
}

router.post("/",getUserData);
module.exports = router;