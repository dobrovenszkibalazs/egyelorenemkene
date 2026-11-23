const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    class Order extends Model {};

    Order.init(
        {
            ID: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
            },

            orderTimestamp: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },

            buyerId: {
                type: DataTypes.UUID,
                allowNull: false,
            }
        },
        {
            sequelize,
            modelName: "Order",
            tableName: "orders",
            freezeTableName: true,
            timestamps: true,
        }
    );

    return Order;
};