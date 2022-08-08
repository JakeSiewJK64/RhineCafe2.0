const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoConnect = require('./config/conn');
const path = require("path");
const PORT = 5000;
var app = express();

mongoConnect();

// declare routes
const indexRouter = require("./routes/index");
const experienceRouter = require("./routes/experience");
const educationRouter = require("./routes/education");
const projectRouter = require("./routes/project");
const authRouter = require("./routes/auth/jwtAuth");

// configuring middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.use(
    express.json({
        limit: "100mb"
    })
)

app.use(express.static("clientapp/build"))
app.use("/experience", experienceRouter);
app.use("/education", educationRouter);
app.use("/projects", projectRouter);
app.use("/auth", authRouter);
app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "clientapp/build/index.html"));
});


app.listen(process.env.PORT || PORT, () => {
    console.log(`Now starting server at port ${PORT}...`);
});