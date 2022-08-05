const mongoose = require('mongoose');

const experienceSchema = mongoose.Schema({
    CompanyName: {
        type: String
    }
});

module.exports = mongoose.model('Experience', experienceSchema);