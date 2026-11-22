//#region imports
const express = require("express");

const errorH = require("./api/middlewares/errorHandler")

const {billingDetailRoutes, buyerRoutes, commentRoutes, gameRoutes, orderRoutes, productRoutes, sellerRoutes } = require("./api/routes");

const app = express();

const api = express();
//#endregion

//#region app
app.use(express.json());

app.use(...errorH)

app.use(express.urlencoded({ extended: true }));

app.use("/api", api);
//#endregion

//#region api
api.use("/billingDetails", billingDetailRoutes);

api.use("/buyers", buyerRoutes);

api.use("/comments", commentRoutes);

api.use("/games", gameRoutes);

api.use("/orders", orderRoutes);

api.use("/products", productRoutes);

api.use("/sellers", sellerRoutes);
//#endregion

module.exports =
{
    app,
    api,
}