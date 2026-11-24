//#region imports
const express = require("express");

const errorH = require("./api/middlewares/errorHandler")

const {billingDetailRoutes, buyerRoutes, commentRoutes, gameRoutes, orderRoutes, productRoutes, sellerRoutes, userRoutes } = require("./api/routes");

const app = express();

const api = express();
//#endregion

//#region app
app.use(express.json());



app.use(express.urlencoded({ extended: true }));

app.use("/api", api);
//#endregion

//#region api
api.use("/users", userRoutes);

api.use("/billingDetails", billingDetailRoutes);

api.use("/buyers", buyerRoutes);

api.use("/comments", commentRoutes);

api.use("/games", gameRoutes);

api.use("/orders", orderRoutes);

api.use("/products", productRoutes);

api.use("/sellers", sellerRoutes);
//#endregion

app.use(...errorH)

module.exports =
{
    app,
    api,
}