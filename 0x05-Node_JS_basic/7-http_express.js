const express = require("express");
const path = require("path");
const port = 1245;
const countStudents = require("./3-read_file_async");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Holberton School!\n");
});

app.get("/students", (req, res) => {
    const databasePath = process.argv[2] || "database.csv";

    countStudents(databasePath)
        .then(() => {
            res.send("This is the list of our students\n");
        })
        .catch((error) => {
            res.send(error.message + "\n");
        });
});

app.listen(port, () => {
    console.log("Server is listening on port " + port + "");
});

module.exports = app;
