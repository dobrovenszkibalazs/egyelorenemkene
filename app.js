const express = require("express");

const errorH = require("./api/middlewares/errorHandler")

const app = express();

const api = express();

app.use(express.json());

app.use(...errorH)

app.use(express.urlencoded({ extended: true }));

app.use("/api", api);

module.exports =
{
    app,
    api,
}