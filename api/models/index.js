module.exports = (sequelize) =>
{
    const Orders = require("./Order")(sequelize);
    const Products = require("./Product")(sequelize);

    //Order-Product
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
    //Order-Product

    return { Orders, Products };
};