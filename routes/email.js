const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();
// const userSchema = require("../model/userSchema.js");
// const cookieParser = require("cookie-parser");

router.use(express.json());

router.post("/", async (req, res) => {
  const id = req.body.id;
  try {
    var mail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "seventhfloor860@gmail.com",
        pass: "fatu qfro vciz rown",
      },
    });
    var mailOptions = {
      from: "seventhfloor860@gmail.com",
      to: "ra22@iitbbs.ac.in",
      subject: "Payment Due",
      text: "This is link to make payment http://localhost:8000/payment/" + id,
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
