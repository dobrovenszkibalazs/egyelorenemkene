const BillingDetail = require("./BillingDetail");

module.exports = (sequelize) =>
{
    const BillingDetails = require("./BillingDetail")(sequelize);
    const Buyers = require("./Buyer")(sequelize);
    const Comments = require("./Comment")(sequelize);
    const Games= require("./Game")(sequelize);
    const Orders = require("./Order")(sequelize);
    const Products = require("./Product")(sequelize);
    const Sellers = require("./Seller")(sequelize);
    
    //#region Order Has Product
    Orders.belongsToMany(Products,
    {
        through: "order_products",
        foreignKey:
        {
            name: "orderId",
        },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    });

    Products.belongsToMany(Orders,
    {
        through: "order_products",
        foreignKey:
        {
            name: "productId",
        },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    });
    //#endregion
    //#region Product Has Seller
    Sellers.hasMany(Products, {
        foreignKey: {
            name: "sellerId",
            allowNull: false,
        },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
        });

    Products.belongsTo(Sellers, {
        foreignKey: {
            name: "sellerId",
            allowNull: false,
        },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    });
    //#endregion
    //#region Seller Has Comment
    Sellers.hasMany(Comments, {
        foreignKey: {
            name: "sellerId",
            allowNull: false,
        },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    });
    Comments.belongsTo(Sellers, {
        foreignKey: {
            name: "sellerId",
            allowNull: false,
        },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    });
    
    //#endregion
    //#region Buyer Writes Comment
    //#endregion
    //#region Buyer Orders Order
    //#endregion
    //#region Buyer Plays Games
    //#endregion
    //#region Buyer Has BillingDetails
    //#endregion
    //#region Order Has BillingDetails
    //#endregion
    
    return {BillingDetails, Buyers, Comments, Games, Orders, Products, Sellers };
};