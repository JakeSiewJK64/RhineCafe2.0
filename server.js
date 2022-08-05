const path = require('path');
const cors = require('cors');
const express = require('express');
var app = express();
const PORT = 5000;

// declare routes
const indexRouter = require("./routes/index");

// configuring middleware
app.use(cors())
app.use(
    express.json({
        limit: "100mb"
    })
)

// app.use(express.static("client/build"))

// configuring routes
app.use("/", indexRouter);

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client/build/index.html"));
// });

app.listen(PORT, () => {
    console.log(`Now starting server at port ${PORT}...`);
});