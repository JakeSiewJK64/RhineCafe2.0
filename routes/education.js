const express = require('express');
const router = express.Router();
const educationModel = require('../models/educationModel');

router.get('/getEducation', async (_, res,) => {
    const education = await educationModel.find();
    res.send(education);
})

module.exports = router;
