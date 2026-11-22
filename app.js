//imports
const express = require("express");

const errorH = require("./api/middlewares/errorHandler")

const { orderRoutes, productRoutes } = require("./api/routes");

const app = express();

const api = express();
//
//-----------------------
//app
app.use(express.json());

app.use(...errorH)

app.use(express.urlencoded({ extended: true }));

app.use("/api", api);
//
//------------------------
//api
api.use("/orders", orderRoutes);

api.use("/products", productRoutes);
//

module.exports =
{
    app,
    api,
}