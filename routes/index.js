const express = require("express");
const cors = require('cors');
const router = express.Router();

app = express();
app.use(cors());

router.get("/", (req, res, next) => {
    res.send({ "message": "hello world" })
});

module.exports = router;
