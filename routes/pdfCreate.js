const express = require("express");
const router = express.Router();
const fs = require("fs");
const ejs = require("ejs");
const path = require("path");
const billSchema = require("../model/billSchema");

router.get("/:id",async (req, res) => {
  try{
    const user = await billSchema.findById(req.params.id);
    if(!user){
      res.send("Bill Not Found");
    }else{
      res.render("bill", { data: user });
    }
  }catch(error){
    console.log(error);
    res.send(["error : ",JSON.stringify(error)]);
  }
});

module.exports = router;

