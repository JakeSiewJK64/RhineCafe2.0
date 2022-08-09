const express = require('express');
const router = express.Router();
const projectModel = require('../models/projectModel');
const authorize = require('./auth/authorize');

router.get('/getProjects', async (req, res) => {
    const projects = await projectModel.find();
    res.send(projects);
})

router.get('/getProjectById/:projectId', async (req, res) => {
    const projects = await projectModel.findById(req.params.projectId);
    res.send(projects);
})

router.post('/upsertProject', authorize, async (req, res) => {
    const response = await projectModel.findOneAndUpdate({ _id: req.body._id }, req.body, { upsert: true });
    res.send({
        msg: "Created Project Successfully",
    });
})

module.exports = router;