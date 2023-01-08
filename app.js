const chalk = require('chalk');
const express = require('express');
const debug = require('debug')('debug');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('combine'));

app.get("/", (req,res) => {

    res.send("Hello world");

});

app.listen(port, () => {
    debug("Listening on port " + chalk.green(port));
});