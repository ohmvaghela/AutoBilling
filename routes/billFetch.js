const express = require("express");
const router = express.Router();
const billSchema = require("../model/billSchema.js");

router.use(express.json());

router.put('/:id',async (req,res)=>{
    const id = req.params.id;
    try{
        // const result = billSchema.findOne({_id:id});
        // if(!result){
        //     throw "bill not found";
        // }
        
        const bill = await billSchema.findOneAndUpdate({_id:id},{
            billStatus:true
        }).then((x)=>{
            res.send("updated");
        }).catch((e)=>{
            res.send(e);
        });
    }catch(e){
        res.send(e);
    }
});

module.exports = router;