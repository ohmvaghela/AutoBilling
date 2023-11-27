const express = require("express");
const router = express.Router();
const fs = require("fs");
const ejs = require("ejs");
const path = require("path");
// router = router.use(express.json());

const data = {
    name:"Alison Burgers",
    logo:'./iit.png',
    companyLocaction:` 8358 Sunset Blvd, West Hollywood, CA 90069, United States`,
    buyerLocaction:`Los Angeles, CA, United States `,
    email:"xyz@ele.works.in",
    buyerName:"Walter White",
    companyName:"ElectroChemical Works",
    invoiceID:1234,
    dueDate:Date.now().toString(),
    curDate:Date.now().toString(),
    Description:"Material : Aluminum" ,
    cost:15000,
    header:"electrochemical works",
};

router.get("/", (req, res) => {
  res.render("bill", { data: data });
});

module.exports = router;


