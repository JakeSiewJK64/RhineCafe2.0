//Mongo Connection credentials
const CONNECTION_URL = `mongodb+srv://jakesiewjk64:jnv85aHhwIDgAZJz@jakesiewjk64-cluster.ylfe7e1.mongodb.net/-portfoliodb?retryWrites=true&w=majority`
const DATABASE_NAME = `jakesiewjk64-portfoliodb`
const MongoClient = require('mongodb').MongoClient;
let _db;

module.exports = {
    connectToServer: (callback) => {
        MongoClient.connect(CONNECTION_URL, function (err, client) {
            _db = client.db(DATABASE_NAME);
            console.log('Connected to database: ' + DATABASE_NAME);
            return callback(err);
        });
    },
    getDb: () => {
        return _db;
    }
};