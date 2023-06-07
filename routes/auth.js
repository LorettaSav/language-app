var express = require("express");
var router = express.Router();
const models = require("../models/index");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
const saltRounds = 10;
require("dotenv").config();
const supersecret = process.env.SUPER_SECRET;
// userMustBeLoggedIn from '../guards/userMustBeLoggedIn';

//somehow the second thing I insert into body json is NOT valid giving me NULL
router.post("/register", async function (req, res, next) {
  const { firstname, lastname, email, username, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    await models.User.findOne({
      where: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        username: username,
        password: hash,
      },
    });
    await models.User.create({ firstname, lastname, email, username, hash });
    res.send("Registered successfully");
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//with the above (Null) --> "message": "Cannot read properties of undefined (reading '0')
router.post("/login", async function (req, res, next) {
  const { userN, password } = req.body;
  try {
    const results = await models.User.findOne({
      where: { username: `${userN}` },
    });
    const user = results.data[0];
    if (user) {
      const userID = user.id;
      const correctPass = await bcrypt.compare(password, user.password);
      if (!correctPass) throw new Error("Incorrect Password");
      var token = jwt.sign({ userID }, supersecret);
      res.send({ message: `Login successful, get your token`, token });
    } else {
      throw new Error("user does not exist");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.get("/profile", async function (req, res, next) {
  res.send({
    message: "You are logged in, this is your profile",
    user_id: req.user_id,
  });
  //i would go to my favourites table where userId === user_id and in that send
  //would send those for example not user_id:req.user_id.
});

module.exports = router;
