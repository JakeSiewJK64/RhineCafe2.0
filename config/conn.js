const mongoose = require('mongoose')
const CONNECTION_URL = `mongodb+srv://jakesiewjk64:jnv85aHhwIDgAZJz@jakesiewjk64-cluster.ylfe7e1.mongodb.net/portfoliodb?retryWrites=true&w=majority`
const connectDb = async () => {
    try {
        const conn = await mongoose.connect(CONNECTION_URL)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;