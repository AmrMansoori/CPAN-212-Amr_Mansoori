import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

const router = express.Router();

// 1 - register
router.post("/register", (req, res) => {
  const { email, password } = req.body;

  bcrypt.hash(password, 10).then((hashedPassword) => {
    let newUser = new User({ email, password: hashedPassword });

    newUser.save().then(() => {
      res.json({ message: "You are Registered" });
    });
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email })
    .then((userAccount) => {
      if (!userAccount) {
        res.status(400).json({ message: "No ACCOUNT FOUND" });
      }

      bcrypt.compare(password, userAccount.password).then((compareResults) => {
        if (compareResults) {
          res.json({ message: "You are Logged in" });
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "Account not found" });
    });
});

export default router;
