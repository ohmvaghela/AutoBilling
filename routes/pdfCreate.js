const express = require("express");
const router = express.Router();
const fs = require("fs");
const ejs = require("ejs");
const path = require("path");
// router = router.use(express.json());

const data = {
    name:"Bhau rand",
    logo:'./iit.png',
    companyLocaction:`Randi Kotha MHR A-707 IIT Bhubashwar`,
    buyerLocaction:`Bakchod Kotha MHR A-728 IIT Bhubaneswar`,
    email:"an30@iitbbs.ac.in",
    buyerName:"Takla",
    companyName:"ganja supplier",
    invoiceID:1234,
    dueDate:Date.now().toString(),
    curDate:Date.now().toString(),
    Description:"2 Russian \n 1 Thar",
    cost:1506000,
};

router.get("/", (req,res)=>{
    // ejs.renderFile(path.join(__dirname, '../views/bill.ejs'), data, {}, function(err, str) {
    //     if (err) return res.send(["error",err]);
        
    //     // str now contains your rendered html
    //     //your pdf object should be used here
    //     pdf.create(str).toFile("name of the file", function(err, data) {
    //         if (err) return res.send ("error",err);
            
    //         // res.send("File created successfully");
    //     });
    // });
    res.render("bill",{data : data})
});

module.exports = router;


