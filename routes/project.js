const express = require('express');
const router = express.Router();
const projectModel = require('../models/projectModel');

router.get('/getProjects', async (req, res) => {
    const projects = await projectModel.find();
    res.send(projects);
})

module.exports = router;