const express = require("express");
const router = express.Router();
const experienceModel = require('../models/experienceMode');

router.get("/getExperiences", async (req, res, next) => {
    const experiences = await experienceModel.find();
    res.send(experiences);
});

module.exports = router;
