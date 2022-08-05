const mongoose = require('mongoose');
const connectionString = process.env.ATLAS_URI;

mongoose.connect(`mongodb+srv://jakesiewjk64:jnv85aHhwIDgAZJz@jakesiewjk64-cluster.ylfe7e1.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

module.exports = db;