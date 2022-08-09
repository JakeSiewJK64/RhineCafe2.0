const mongoose = require('mongoose');

const projectModel = mongoose.Schema({
    Name: String,
    Description: String,
    URL: String,
    GithubRepo: String,
    StartDate: Date,
    EndDate: Date,
    Tools: Array
}, {
    versionKey: false
});

module.exports = mongoose.model('project', projectModel);