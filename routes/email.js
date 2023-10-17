const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();
// const userSchema = require("../model/userSchema.js");
// const cookieParser = require("cookie-parser");

router.use(express.json());

router.post("/", async (req, res) => {
  try {
    var mail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "",
        pass: "",
      },
    });
    var mailOptions = {
      from: "seventhfloor860@gmail.com",
      to: "an30@iitbbs.ac.in",
      subject: "Bhau Rand",
      text: "Bhau is certified Rand",
      attachments: [
        {
          filename: "Hello.txt",
          path: "./public/datafolder/test.txt",
        },
      ],
    };

    mail.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log("Email sent:" + info.response);
        res.send("Email sent");
      }
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
