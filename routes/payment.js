const express = require("express");
const router = express.Router();
const billSchema = require("../model/billSchema.js");

router.use(express.json());

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  var orderid;
  const bill = await billSchema.findOne({ billID: id });
  try {
    if (!bill) {
      throw "bill not found";
    }
    orderid = bill.orderId;

    const data = {
      id: req.params.id,
      orderid: orderid,
      amount: bill.billAmount/100,
      name:"Alison Burgers",
      // logo:'./iit.png',
      companyLocaction:` 8358 Sunset Blvd, West Hollywood, CA 90069, United States`,
      buyerLocaction:`Los Angeles, CA, United States `,
      email:"xyz@ele.works.in",
      buyerName:"Walter White",
      companyName:"ElectroChemical Works",
      invoiceID:1234,
      dueDate:Date.now().toString(),
      curDate:Date.now().toString(),
      Description:"Material : Aluminum" ,
      cost:bill.billAmount/100,
      header:"electrochemical works",
    };
    res.render("razor2", { data: data });
  } catch (err) {
    res.send("error");
  }
});

module.exports = router;

module.exports = router;
