const express = require("express");
const router = express.Router();
const experienceModel = require('../models/experienceModel');

router.get("/getExperiences", async (req, res, next) => {
    const experiences = await experienceModel.find();
    res.send(experiences);
});

router.get("/getExperienceById/:projectId", async (req, res) => {
    const experience = await experienceModel.findById(req.params.projectId);
    res.send(experience);
});

module.exports = router;
