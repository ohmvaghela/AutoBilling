const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();
// const userSchema = require("../model/userSchema.js");
// const cookieParser = require("cookie-parser");

router.use(express.json());

router.post("/", async (req, res) => {
  try {
    var mail = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "willard20@ethereal.email",
        pass: "WcdGDpD9sw8zCTWM7h",
      },
    });
    var mailOptions = {
      from: "willard20@ethereal.email",
      to: "ra22@iitbbs.ac.in",
      subject: "Hi",
      text: "This is the sample email",
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
