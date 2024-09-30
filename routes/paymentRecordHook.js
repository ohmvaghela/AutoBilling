const express = require('express');
const router = express.Router()

router.use(express.json());

const logRazorPayment = async (req,res) =>{
  try{
    console.log(req.body);
    res.status(200).send("captured");
  }catch(e){
    res.send(500).send(e)
  }
}

router.get("/",logRazorPayment);

module.exports = router;