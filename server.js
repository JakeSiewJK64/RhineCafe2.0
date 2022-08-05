const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./conn');
var app = express();
const PORT = 5000;

// declare routes
const indexRouter = require("./routes/index");
const experienceRouter = require("./routes/experience");

// configuring middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())
app.use(
    express.json({
        limit: "100mb"
    })
)

// configuring routes
app.use("/", indexRouter);
// app.use("/experience", experienceRouter);

// app.use(express.static("client/build"))
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client/build/index.html"));
// });

app.listen(PORT, () => {
    console.log(`Now starting server at port ${PORT}...`);
});