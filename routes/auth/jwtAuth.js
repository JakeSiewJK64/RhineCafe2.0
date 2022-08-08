const express = require('express');
const router = express.Router();
const jwtGenerator = require('../../utils/jwtGenerator');
const authorize = require('./authorize');
const validInfo = require('./validInfo');

router.post("/login", validInfo, async (req, res) => {
    const { email, password } = req.body;
    try {

        const auth_user = {
            email: "joekanesiew@outlook.com",
            password: "welcome@123"
        }

        if (email !== auth_user.email || password !== auth_user.password) {
            return res
                .status(401)
                .json("Either your email or password is incorrect!");
        }
        const jwtToken = jwtGenerator(email);
        return res.json({ jwtToken });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error!");
    }
});

router.post("/verify", authorize, (req, res) => {
    try {
      res.json(true);
    } catch (error) {
        console.log(error);
      res.status(500).send("Server Error!");
    }
  });

  module.exports = router;