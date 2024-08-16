const express = require("express");
const router = express.Router();
const userSchema = require("../model/userSchema.js");
const cookieParser = require("cookie-parser");

router.use(express.json());
const cur_route = "addUser : ";
router.post("/", async (req, res) => {
  const d = await userSchema.find();
  var size = d.length + 1;
  try {
    const user = new userSchema({
      shopID: size,
      createdAt: Date.now(),
      shopName: req.body.name,
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      shopEmail: req.body.email,
      password: req.body.password,
    });
    const sharableUserData = {
      shopID: size,
      shopName: req.body.name,
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      shopEmail: req.body.email,
    };
    const token = await user.generateAuthToken();
    const refreshToken = await user.generateRefreshToken();
    const newUser = await user
      .save()
      .then((x) => {
        console.log(cur_route + "user added succesfully");
        res.cookie("jwt", refreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          // secure: true, // Ensure this is true for HTTPS
          sameSite: "None", // Must be 'None' to allow cross-site requests
        });
        res.status(200).send({ token: token, user: sharableUserData });
      })
      .catch((err) => {
        if (err.code === 11000) {
          console.log(cur_route + "duplicate key found : ", err.keyPattern);
          res.send([false, "User already exist : ", err.keyPattern]);
        } else {
          console.log(cur_route + "user not added");
          res.send([false, "Fail to add user : ", err]);
        }
      });
  } catch (err) {
    console.log([cur_route, err]);
    res.send(["user not added client error : ", err]);
  }
});

module.exports = router;
