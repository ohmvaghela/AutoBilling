const express = require("express");
const router = express.Router();
const userSchema = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");

router.use(express.json());
const cur_route = "loginUser : ";
router.post("/", async (req, res) => {
  const loginEmail = req.body.email;
  const url = "http://localhost:5173/home";
  const password = req.body.password;
  const doc = await userSchema.findOne({ shopEmail: loginEmail });
  // console.log(cur_route+"doc : "+doc);
  try {
    if(!doc){
      console.log(cur_route + "user not found");
      res.status(404).send("user not found");
    }
    else{
      const passmatch = await bcrypt.compare(password, doc.password);
      if (passmatch) {
        // console.log(cur_route+"hi")
        const token = await doc.generateAuthToken();
        // console.log(cur_route+token);
        res.cookie("jwt", token, {
          expires: new Date(Date.now() + 60000),
          httpOnly: true,
        });
      }
      if (doc && passmatch) {
        res.status(200).send("login success");
      } else {
        throw "Password is incorrect";
      }
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
