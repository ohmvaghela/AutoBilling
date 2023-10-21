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
      amount: bill.billAmount,
    };
    res.render("razor", { data: data });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;

module.exports = router;
