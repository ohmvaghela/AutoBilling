const express = require("express");
const router = express.Router();
const userSchema = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");

router.use(express.json());

router.post("/", async (req, res) => {
  const loginEmail = req.body.loginEmail;
  const password = req.body.password;
  const doc = await userSchema.findOne({ shopEmail: loginEmail });
  console.log(doc);
  try {
    const passmatch = await bcrypt.compare(password, doc.password);
    // console.log(passmatch);
    if (passmatch) {
      // console.log("hi")
      const token = await doc.generateAuthToken();
      // console.log(token);
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 60000),
        httpOnly: true,
      });
    }
    if (doc && passmatch) {
      res.send(doc);
    } else {
      throw "Password is incorrect";
    }
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
